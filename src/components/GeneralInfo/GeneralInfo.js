import React from "react";
import styled from "styled-components";
import { DownArrow } from "@styled-icons/boxicons-regular";
const MainContainer = styled.div`
  margin: 0px auto;
  max-width: 906px;
  height: 55px;
  background: #191b1f;
  border-radius: 0 0 10px 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const TextContainer = styled.div`
  font-size: 17px;
  font-weight: normal;
  font-style: normal;
  color: #ffffff;
`;

const TextWithBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  font-weight: normal;
  font-style: normal;
  color: #ffffff;
  gap: 7px;
`;

const Bar = styled.div`
  display: flex;
  flex: 1 1 0%;
  width: 55px;
  height: 13px;
  border-radius: 8px;
  overflow: hidden;
  background-color: rgb(39, 117, 201);
  margin-top: 2.5px;
`;

const CoinIcon = styled.img`
 width: 14px;
 height: 14px;
`;

const DownIcon = styled(DownArrow)`
  color: #00FF5F;
  width: 10px;
  height: 10px;
`;
export default function GeneralInfo() {
  return (
    <MainContainer>
      <TextContainer>Coins 7884 </TextContainer>
      <TextContainer>Exchange 662 </TextContainer>
      <TextContainer>• $1.245T <DownIcon/> </TextContainer>
      <TextWithBarContainer>• $49.50B <Bar/></TextWithBarContainer>
      <TextWithBarContainer> <CoinIcon src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" alt="btc img" />44% <Bar/></TextWithBarContainer>
      <TextWithBarContainer> <CoinIcon src="https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880" alt="etc img" />18% <Bar/></TextWithBarContainer>
    </MainContainer>
  );
}
