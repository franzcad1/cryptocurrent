import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import CoinSummary from "../../components/CoinSummary/CoinSummary";
import CoinChart from "../../components/CoinChart/CoinChart";
import { openNewTab } from "../../utils/openNewTab";
import { useDispatch, useSelector } from "react-redux";
import { changeRange, getCoin } from "../../store/coin/coinActions";
import {
  CoinPageContainer,
  Heading,
  DescriptionContainer,
  StackIcon,
  SwapIcon,
  CopyIcon,
  LinksContainer,
  LinkContainer,
  LinkText,
  LinkIcon,
  RangeContainer,
  Label,
  Paragraph,
  RadioBox,
  Input,
  ConvertContainer,
  InputContainer,
  ConvertLabel,
  StyledInput,
  CoinDescription,
  ErrorContainer,
  ErrorIconLarge,
  ErrorTitle,
  ErrorMsg,
  RetryButton,
  ErrorHint,
  SkeletonBlock,
  SkeletonRow,
  SkeletonChartBlock,
} from "./Coin.styles";

function usePrevious(value) {
  const prevRef = useRef();
  useEffect(() => {
    prevRef.current = value;
  }, [value]);
  return prevRef.current;
}

export default function Coin() {
  const dispatch = useDispatch();
  const { coinID } = useParams();
  const coin = useSelector((state) => state.coin);
  const prevCoin = usePrevious(coin);
  const { range } = coin;

  const [currencyVal, setCurrencyVal] = useState(0);
  const [cryptoVal, setCryptoVal] = useState(1);

  useEffect(() => {
    dispatch(getCoin(coinID));
    if (coin.coinData) {
      setCurrencyVal(coin.coinData.market_data.current_price.cad);
    }
    // eslint-disable-next-line
  }, [coinID]);

  useEffect(() => {
    if (coin.coinData) {
      if (coin !== prevCoin) {
        setCurrencyVal(coin.coinData.market_data.current_price.cad);
      }
    }
    // eslint-disable-next-line
  }, [coin]);

  useEffect(() => {
    dispatch(getCoin(coinID));
    // eslint-disable-next-line
  }, [range]);

  const handleRangeChange = (e) => {
    dispatch(changeRange(e.target.value));
  };

  const handleCryptoChange = (e) => {
    setCryptoVal(e.target.value);
    setCurrencyVal(
      e.target.value * coin.coinData.market_data.current_price.cad
    );
  };

  const handleCurrencyChange = (e) => {
    setCurrencyVal(e.target.value);
    setCryptoVal(e.target.value / coin.coinData.market_data.current_price.cad);
  };

  const [retrySeconds, setRetrySeconds] = React.useState(0);
  const [retryCount, setRetryCount] = React.useState(0);

  React.useEffect(() => {
    if (coin.hasError && !coin.coinData) {
      setRetrySeconds(30);
      setRetryCount((c) => c + 1);
    }
  }, [coin.hasError, coin.coinData]);

  React.useEffect(() => {
    if (retrySeconds <= 0) return;
    const t = setTimeout(() => setRetrySeconds((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [retrySeconds]);

  if (coin.isLoading || (!coin.coinData && !coin.hasError)) {
    return (
      <>
        <CoinPageContainer>
          <SkeletonBlock height="22px" width="120px" mb="70px" style={{ marginTop: "70px" }} />
          <SkeletonRow mb="24px">
            <SkeletonBlock height="80px" width="80px" radius="50%" />
            <div style={{ flex: 1 }}>
              <SkeletonBlock height="32px" width="200px" mb="12px" />
              <SkeletonBlock height="18px" width="120px" />
            </div>
          </SkeletonRow>
          <SkeletonBlock height="120px" mb="24px" />
          <SkeletonRow mb="24px">
            <div style={{ flex: 1 }}><SkeletonBlock height="64px" /></div>
            <div style={{ flex: 1 }}><SkeletonBlock height="64px" /></div>
            <div style={{ flex: 1 }}><SkeletonBlock height="64px" /></div>
          </SkeletonRow>
          <SkeletonBlock height="48px" width="400px" style={{ margin: "60px auto 24px" }} />
          <SkeletonBlock height="48px" width="300px" style={{ margin: "0 auto" }} />
        </CoinPageContainer>
        <SkeletonChartBlock />
      </>
    );
  }

  if (coin.hasError && !coin.coinData) {
    return (
      <CoinPageContainer>
        <ErrorContainer>
          <ErrorIconLarge />
          <ErrorTitle>Rate Limited</ErrorTitle>
          <ErrorMsg>
            CoinGecko's free API is temporarily limiting requests. Please wait a moment before trying again.
          </ErrorMsg>
          <RetryButton
            disabled={retrySeconds > 0}
            onClick={() => dispatch(getCoin(coinID))}
          >
            {retrySeconds > 0 ? `Retry in ${retrySeconds}s` : "Try Again"}
          </RetryButton>
          {retryCount > 1 && (
            <ErrorHint>
              Sorry about that — this is a demo using CoinGecko's free API, which has strict rate limits.
            </ErrorHint>
          )}
        </ErrorContainer>
      </CoinPageContainer>
    );
  }

  return (
    <>
      <CoinPageContainer>
        {coin.coinData && (
          <>
            <Heading>Your summary</Heading>
            <CoinSummary coin={coin} />

            {coin.coinData.description.en !== "" && (
              <>
                <Heading>Description</Heading>
                <DescriptionContainer>
                  <StackIcon />
                  <CoinDescription
                    dangerouslySetInnerHTML={{
                      __html: coin.coinData.description.en,
                    }}
                  ></CoinDescription>
                </DescriptionContainer>
              </>
            )}
            <LinksContainer>
              <LinkContainer
                onClick={() =>
                  openNewTab(coin.coinData.links.blockchain_site[0])
                }
              >
                <LinkIcon />
                <LinkText>
                  {coin.coinData.links.blockchain_site[0].replace(
                    /^https?:\/\//,
                    ""
                  )}
                </LinkText>
                <CopyIcon />
              </LinkContainer>
              <LinkContainer
                onClick={() =>
                  openNewTab(coin.coinData.links.blockchain_site[1])
                }
              >
                <LinkIcon />
                <LinkText>
                  {coin.coinData.links.blockchain_site[1].replace(
                    /^https?:\/\//,
                    ""
                  )}
                </LinkText>
                <CopyIcon />
              </LinkContainer>
              <LinkContainer
                onClick={() =>
                  openNewTab(coin.coinData.links.blockchain_site[2])
                }
              >
                <LinkIcon />
                <LinkText>
                  {coin.coinData.links.blockchain_site[2].replace(
                    /^https?:\/\//,
                    ""
                  )}
                </LinkText>
                <CopyIcon />
              </LinkContainer>
            </LinksContainer>
            <RangeContainer onChange={(e) => handleRangeChange(e)}>
              <Label id="1d">
                <Input
                  type="radio"
                  name="range"
                  id="1d"
                  value="1"
                  defaultChecked
                />
                <RadioBox></RadioBox>
                <Paragraph>1d</Paragraph>
              </Label>
              <Label id="7d">
                <Input type="radio" name="range" id="7d" value="7" />
                <RadioBox></RadioBox>
                <Paragraph>7d</Paragraph>
              </Label>
              <Label id="30d">
                <Input type="radio" name="range" id="30d" value="30" />
                <RadioBox></RadioBox>
                <Paragraph>30d</Paragraph>
              </Label>
              <Label id="90d">
                <Input type="radio" name="range" id="90d" value="90" />
                <RadioBox></RadioBox>
                <Paragraph>90d</Paragraph>
              </Label>
              <Label id="1y">
                <Input type="radio" name="range" id="1y" value="365" />
                <RadioBox></RadioBox>
                <Paragraph>1y</Paragraph>
              </Label>
              <Label id="Max">
                <Input type="radio" name="range" id="Max" value="max" />
                <RadioBox></RadioBox>
                <Paragraph>Max</Paragraph>
              </Label>
            </RangeContainer>
            <ConvertContainer>
              <InputContainer>
                <ConvertLabel>
                  {coin.coinData.symbol.toUpperCase()}
                </ConvertLabel>
                <StyledInput
                  type="text"
                  value={cryptoVal}
                  onChange={(e) => handleCryptoChange(e)}
                />
              </InputContainer>
              <SwapIcon />
              <InputContainer>
                <ConvertLabel>CAD</ConvertLabel>
                <StyledInput
                  type="text"
                  value={currencyVal}
                  onChange={(e) => handleCurrencyChange(e)}
                />
              </InputContainer>
            </ConvertContainer>
          </>
        )}
      </CoinPageContainer>
      {coin.chartData && (
        <>
          <CoinChart chartData={coin.chartData} />
        </>
      )}
    </>
  );
}
