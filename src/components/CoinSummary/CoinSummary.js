import React from 'react'
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
  gap: 25px;
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
  color: #00fc2a;
  margin-top: 35px;
`;
const ProfitContainer = styled.div`
  font-size: 18px;
  font-weight: normal;
  font-style: normal;
  text-align: center;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  line-height: 0;
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

const Profit = styled.p`
  font-size: 19px;
  font-weight: normal;
  font-style: normal;
  text-align: center;
  color: #00fc2a;
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
export default function CoinSummary() {
  return (
    <SummaryContainer>
    <CoinInfo>
      <LeftContainer>
        <IconContainer>
          <Icon src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" />
        </IconContainer>
        <CoinName>Bitcoin (BTC)</CoinName>
      </LeftContainer>
      <CoinLink>
        <LinkIcon />
        www.bitcoin.org
      </CoinLink>
    </CoinInfo>
    <MiddleContainer>
      <NumbersContainer>
        <PriceContainer>
          <Price>$40,017</Price>
          <IconWithTextContainer>
            <UpIcon />
            5%
          </IconWithTextContainer>
        </PriceContainer>
        <ProfitContainer>
          Profit: <Profit>$1,504</Profit>
        </ProfitContainer>
      </NumbersContainer>
      <StackIcon />
      <IconWithTextContainer>
        <ArrowContainer>
          <UpIcon />
        </ArrowContainer>
        <AllTimeContainer>
          All Time High: $64,805
          <DateTime>{new Date().toLocaleString()}</DateTime>
        </AllTimeContainer>
      </IconWithTextContainer>
      <IconWithTextContainer>
        <ArrowContainer>
          <DownIcon />
        </ArrowContainer>
        <AllTimeContainer>
          All Time Low: $32,805
          <DateTime>{new Date().toLocaleString()}</DateTime>
        </AllTimeContainer>
      </IconWithTextContainer>
    </MiddleContainer>
    <RightContainer>
      <CenteredDiv>
        <IconWithTextContainer>
          <PlusIcon /> Market Cap: $749,864,345,056 2.44%
        </IconWithTextContainer>
        <IconWithTextContainer>
          <PlusIcon /> Fully Diluted Valuation: $840,523,040,085
        </IconWithTextContainer>
        <IconWithTextContainer>
          <PlusIcon /> Volume 24h: $47,714,337,481
        </IconWithTextContainer>
        <IconWithTextContainer>
          <PlusIcon /> Volume / Market: 0.06363
        </IconWithTextContainer>
      </CenteredDiv>
      <CenteredDiv>
        <IconWithTextContainer>
          <PlusIcon /> Total Volume: 1,192,352 BTC
        </IconWithTextContainer>
        <IconWithTextContainer>
          <PlusIcon /> Circulating Supply: 18,734,943 BTC
        </IconWithTextContainer>
        <IconWithTextContainer>
          <PlusIcon /> Max Supply: 21,000,000 BTC
        </IconWithTextContainer>
      </CenteredDiv>
    </RightContainer>
  </SummaryContainer>
  )
}
