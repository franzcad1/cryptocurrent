import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import CoinSummary from "../../components/CoinSummary/CoinSummary";
import { openNewTab } from "../../utils/openNewTab";
import styled from "styled-components";
import { Stack, Link45deg } from "styled-icons/bootstrap";
import { Copy } from "styled-icons/boxicons-regular";
import { Swap } from "styled-icons/entypo";
import { useDispatch, useSelector } from "react-redux";
import { getCoin } from "../../store/coin/coinActions";


const CoinPageContainer = styled.div`
  margin: 25px auto;
  max-width: 1200px;
`;

const Heading = styled.p`
  font-size: 22px;
  font-weight: 500;
  font-style: normal;
  color: #ffffff;
  margin-top: 70px;
`;

const DescriptionContainer = styled.div`
  max-width: 100%;
  display: flex;
  gap: 30px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #191b1f;
  font-size: 19px;
  font-weight: normal;
  font-style: normal;
  text-align: center;
  color: #ffffff;
  border-radius 15px;
padding: 20px;
`;
const StackIcon = styled(Stack)`
  width: 22px;
  height: 22px;
  color: #ffffff;
`;

const SwapIcon = styled(Swap)`
  width: 22px;
  height: 22px;
  color: #ffffff;
`;

const CopyIcon = styled(Copy)`
  width: 15px;
  height: 15px;
  color: #ffffff;
  cursor: pointer;
`;

const LinksContainer = styled.div`
  display: flex;
  max-width: 100%;
  height: 64px;
  gap: 19px;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

const Link = styled.div`
  display: flex;
  width: 33%;
  height: 100%;
  border-radius: 15px;
  height: 64px;
  gap: 19px;
  align-items: center;
  justify-content: center;
  background: #191b1f;
  font-size: 15px;
  font-weight: normal;
  font-style: normal;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
`;

const LinkIcon = styled(Link45deg)`
  width: 15px;
  height: 15px;
  color: #ffffff;
`;

const RangeContainer = styled.div`
  margin-top: 60px;
  display: flex;
  gap: 36px;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const Paragraph = styled.p`
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: #ffffff;
`;

export const RadioBox = styled.div`
  height: 1.125rem;
  width: 1.125rem;
  border: 1px solid #06d554;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 0.4rem;
  transition: background 0.15s, border-color 0.15s;
  padding: 2px;

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    display: block;
    background: #06d554;
    border-radius: 50%;
    cursor: pointer;
    transform: scale(0);
  }
`;

export const Input = styled.input`
  display: none;
  &:checked + ${RadioBox} {
    &::after {
      transform: scale(1);
    }
  }
`;

const ConvertContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-top: 20px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 331px;
  height: 45px;
  border-radius: 8px;
  background: #2c2d33;
  gap: 5px;
`;

const ConvertLabel = styled.div`
  width: 83px;
  height: 45px;
  border-radius: 8px 0 0 8px;
  background: #06d554;
  font-size: 17px;
  font-weight: normal;
  font-style: normal;
  text-align: center;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledInput = styled.input`
  width: 230px;
  height: 35px;
  background: #2c2d33;
  border: none;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  text-align: center;
  color: #ffffff;
`;

const CoinDescription = styled.p`
  font-size: 19px;
  font-weight: normal;
  font-style: normal;
  text-align: center;
  color: #ffffff;
`;

export default function Coin() {
  const dispatch = useDispatch();
  const { coinID } = useParams();
  const coin = useSelector((state) => state.coin);

  useEffect(() => {
    dispatch(getCoin(coinID, 1));
    // eslint-disable-next-line
  }, []);

  return (
    <CoinPageContainer>
      {coin.coinData && (
        <>
          <Heading>Your summary</Heading>
          <CoinSummary coin={coin} />
          <Heading>Description</Heading>
          {coin.coinData.description && (
            <DescriptionContainer>
              <StackIcon />
              <CoinDescription
                dangerouslySetInnerHTML={{
                  __html: coin.coinData.description.en,
                }}
              ></CoinDescription>
            </DescriptionContainer>
          )}
          <LinksContainer>
            <Link onClick={() => openNewTab(coin.coinData.links.blockchain_site[0])}>
              <LinkIcon />
              {coin.coinData.links.blockchain_site[0].replace(
                /^https?:\/\//,
                ""
              )}
              <CopyIcon />
            </Link>
            <Link onClick={() => openNewTab(coin.coinData.links.blockchain_site[1])}>
              <LinkIcon />
              {coin.coinData.links.blockchain_site[1].replace(
                /^https?:\/\//,
                ""
              )}
              <CopyIcon />
            </Link>
            <Link onClick={() => openNewTab(coin.coinData.links.blockchain_site[1])}>
              <LinkIcon />
              {coin.coinData.links.blockchain_site[2].replace(
                /^https?:\/\//,
                ""
              )}
              <CopyIcon />
            </Link>
          </LinksContainer>
          <RangeContainer>
            <Label id="1d">
              <Input type="radio" name="range" id="1d" value="1d" />
              <RadioBox></RadioBox>
              <Paragraph>1d</Paragraph>
            </Label>
            <Label id="7d">
              <Input type="radio" name="range" id="7d" value="7d" />
              <RadioBox></RadioBox>
              <Paragraph>7d</Paragraph>
            </Label>
            <Label id="30d">
              <Input type="radio" name="range" id="30d" value="30d" />
              <RadioBox></RadioBox>
              <Paragraph>30d</Paragraph>
            </Label>
            <Label id="90d">
              <Input type="radio" name="range" id="90d" value="90d" />
              <RadioBox></RadioBox>
              <Paragraph>90d</Paragraph>
            </Label>
            <Label id="1y">
              <Input type="radio" name="range" id="1y" value="1y" />
              <RadioBox></RadioBox>
              <Paragraph>1y</Paragraph>
            </Label>
            <Label id="Max">
              <Input type="radio" name="range" id="Max" value="Max" />
              <RadioBox></RadioBox>
              <Paragraph>Max</Paragraph>
            </Label>
          </RangeContainer>
          <ConvertContainer>
            <InputContainer>
              <ConvertLabel>CAD</ConvertLabel>
              <StyledInput />
            </InputContainer>
            <SwapIcon />
            <InputContainer>
              <ConvertLabel>BTC</ConvertLabel>
              <StyledInput />
            </InputContainer>
          </ConvertContainer>
        </>
      )}
    </CoinPageContainer>
  );
}
