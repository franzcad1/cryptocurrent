import React from "react";
import { openNewTab } from "../../utils/openNewTab";
import {
  SummaryContainer,
  CoinLink,
  CoinInfo,
  LeftContainer,
  MiddleContainer,
  RightContainer,
  Icon,
  IconContainer,
  CoinName,
  LinkIcon,
  StackIcon,
  PlusIcon,
  NumbersContainer,
  PriceContainer,
  Percentage,
  AllTimeContainer,
  Price,
  DateTime,
  DownIcon,
  UpIcon,
  IconWithTextContainer,
  ArrowContainer,
  CenteredDiv,
} from "./CoinSummary.styles";

export default function CoinSummary(props) {
  const { coinData } = props.coin;

  const formatDate = (date) => {
    const formattedDate = new Date(date);
    return formattedDate.toLocaleString();
  };

  return (
    <SummaryContainer>
      {coinData && (
        <>
          <CoinInfo>
            <LeftContainer>
              <IconContainer>
                <Icon src={coinData.image.large} />
              </IconContainer>
              <CoinName>
                {coinData.name} ({coinData.symbol.toUpperCase()})
              </CoinName>
            </LeftContainer>
            <CoinLink onClick={() => openNewTab(coinData.links.homepage[0])}>
              <LinkIcon />
              {coinData.links.homepage[0].replace(/^https?:\/\//, "")}
            </CoinLink>
          </CoinInfo>
          <MiddleContainer>
            <NumbersContainer>
              <PriceContainer>
                <Price>
                  ${coinData.market_data.current_price.cad.toLocaleString()}
                </Price>
                <IconWithTextContainer>
                  {coinData.market_data.price_change_percentage_24h_in_currency
                    .cad > 0 ? (
                    <UpIcon />
                  ) : (
                    <DownIcon />
                  )}
                  {coinData.market_data.price_change_percentage_24h_in_currency
                    .cad > 0 ? (
                    <Percentage color="#00fc2a">
                      {coinData.market_data.price_change_percentage_24h_in_currency.cad.toFixed(
                        2
                      )}
                      %
                    </Percentage>
                  ) : (
                    <Percentage color="#fe1040">
                      {coinData.market_data.price_change_percentage_24h_in_currency.cad.toFixed(
                        2
                      )}
                      %
                    </Percentage>
                  )}
                </IconWithTextContainer>
              </PriceContainer>
            </NumbersContainer>
            <StackIcon />
            <IconWithTextContainer>
              <ArrowContainer>
                <UpIcon />
              </ArrowContainer>
              <AllTimeContainer>
                All Time High: ${coinData.market_data.ath.cad.toLocaleString()}
                <DateTime>
                  {formatDate(coinData.market_data.ath_date.cad)}
                </DateTime>
              </AllTimeContainer>
            </IconWithTextContainer>
            <IconWithTextContainer>
              <ArrowContainer>
                <DownIcon />
              </ArrowContainer>
              <AllTimeContainer>
                All Time Low: ${coinData.market_data.atl.cad.toLocaleString()}
                <DateTime>
                  {formatDate(coinData.market_data.atl_date.cad)}
                </DateTime>
              </AllTimeContainer>
            </IconWithTextContainer>
          </MiddleContainer>
          <RightContainer>
            <CenteredDiv>
              <IconWithTextContainer>
                <PlusIcon /> Market Cap: $
                {coinData.market_data.market_cap.cad.toLocaleString()}
              </IconWithTextContainer>
              <IconWithTextContainer>
                <PlusIcon /> Fully Diluted Valuation: $
                {coinData.market_data.fully_diluted_valuation.cad.toLocaleString()}
              </IconWithTextContainer>
              <IconWithTextContainer>
                <PlusIcon /> Volume 24h: $
                {coinData.market_data.total_volume.cad.toLocaleString()}
              </IconWithTextContainer>
              <IconWithTextContainer>
                <PlusIcon /> Volume / Market:{" "}
                {(
                  coinData.market_data.total_volume.cad /
                  coinData.market_data.market_cap.cad
                ).toFixed(5)}
              </IconWithTextContainer>
            </CenteredDiv>
            <CenteredDiv>
              <IconWithTextContainer>
                <PlusIcon /> Total Volume:{" "}
                {coinData.market_data.total_volume[coinData.symbol] ? (
                  <>
                    {coinData.market_data.total_volume[
                      coinData.symbol
                    ].toLocaleString()}{" "}
                    {coinData.symbol.toUpperCase()}
                  </>
                ) : (
                  <>${coinData.market_data.total_volume.cad.toLocaleString()}</>
                )}
              </IconWithTextContainer>
              <IconWithTextContainer>
                <PlusIcon /> Circulating Supply:{" "}
                {coinData.market_data.circulating_supply.toLocaleString()}{" "}
                {coinData.symbol.toUpperCase()}
              </IconWithTextContainer>
              <IconWithTextContainer>
                <PlusIcon /> Max Supply:{" "}
                {coinData.market_data.max_supply
                  ? coinData.market_data.max_supply.toLocaleString()
                  : 0}{" "}
                {coinData.symbol.toUpperCase()}
              </IconWithTextContainer>
            </CenteredDiv>
          </RightContainer>
        </>
      )}
    </SummaryContainer>
  );
}
