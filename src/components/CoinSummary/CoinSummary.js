import React from "react";
import styled from "styled-components";
import { Link45deg, Stack, PlusSquareFill } from "styled-icons/bootstrap";
import { DownArrow } from "@styled-icons/boxicons-regular";

const SummaryContainer = styled.div`
  display: flex;
  gap: 60px;
  justify-content: space-between;
`;

const CoinLink = styled.div`
  height: 64px;
  width: 100%;
  background: #191b1f;
  font-size: 15px;
  font-weight: normal;
  font-style: normal;
  text-align: center;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border-radius: 15px;
  cursor: pointer;
`;

const CoinInfo = styled.div`
  height: 379px;
  width: 20%;
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: space-between;
`;

const LeftContainer = styled.div`
  height: 64px;
  width: 100%;
  height: 295px;
  background: #191b1f;
  border-radius: 15px;
`;
const MiddleContainer = styled.div`
  height: 379px;
  width: 35%;
  background: #191b1f;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  border-radius: 15px;
`;

const RightContainer = styled.div`
  height: 379px;
  width: 500px;
  background: #191b1f;
  font-size: 18px;
  font-weight: normal;
  font-style: normal;
  text-align: center;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  border-radius: 15px;
`;

const Icon = styled.img`
  width: 44.4px;
  height: 44.4px;
`;

const IconContainer = styled.div`
  width: 104px;
  height: 103px;
  background: #1f2128;
  border-radius: 8px;
  margin: 40px auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CoinName = styled.p`
  font-size: 25px;
  font-weight: normal;
  font-style: normal;
  text-align: center;
  color: #ffffff;
  line-height: 2;
`;

const LinkIcon = styled(Link45deg)`
  width: 15px;
  height: 15px;
  color: #ffffff;
`;

const StackIcon = styled(Stack)`
  width: 22px;
  height: 22px;
  color: #ffffff;
`;

const PlusIcon = styled(PlusSquareFill)`
  width: 22px;
  height: 22px;
  color: #2172e5;
`;

const NumbersContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const PriceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  font-size: 19px;
  font-weight: normal;
  font-style: normal;
  text-align: center;
  color: ${(props) => props.color};
  margin-top: 35px;
`;

const Percentage = styled.p`
  font-size: 19px;
  font-weight: normal;
  font-style: normal;
  text-align: center;
  color: ${(props) => props.color};
`;

const AllTimeContainer = styled.div`
  font-size: 18px;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: #ffffff;
`;

const Price = styled.h1`
  font-size: 44px;
  font-weight: normal;
  font-style: normal;
  text-align: center;
  color: #ffffff;
  line-height: 0;
`;


const DateTime = styled.p`
  font-size: 18px;
  font-weight: normal;
  font-style: normal;
  text-align: center;
  color: #ffffff;
  line-height: 0;
`;

const DownIcon = styled(DownArrow)`
  color: red;
  width: 10px;
  height: 10px;
`;

const UpIcon = styled(DownArrow)`
  color: #00ff5f;
  width: 10px;
  height: 10px;
  transform: rotate(180deg);
`;

const IconWithTextContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  gap: 5px;
`;
const ArrowContainer = styled.div`
  margin-right: 10px;
`;

const CenteredDiv = styled.div`
  margin-left: 50px;
  width: 90%;
`;
export default function CoinSummary(props) {
  const { coinData } = props.coin;
  
  const formatDate = (date) => {
    const formattedDate = new Date(date);
    return formattedDate.toLocaleString();
  };

  const openNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
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
