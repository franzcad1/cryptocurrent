import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import BitcoinChart from "../BitcoinChart/BitcoinChart";
import VolumeChart from "../VolumeChart/VolumeChart";
import { convertedNumber } from "../../utils/convertedNumber";
import {
  getBitcoinData,
  getBitcoinDataHourly,
} from "../../store/bitcoin/bitcoinActions";
const Heading = styled.p`
  font-size: 22px;
  font-weight: 500;
  font-style: normal;
  color: #ffffff;
`;

const ChartHeading = styled.p`
  font-size: 22px;
  font-weight: 500;
  font-style: normal;
  color: #ffffff;
  line-height: 1px;
  margin-bottom: 0px;
`;

const ChartsContainer = styled.div`
  display: flex;
  gap: 46px;
  justify-content: center;
`;

const Chart = styled.div`
  width: 500px;
  background: #191b1f;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  padding: 15px;

  @media (max-width: 767px) {
    width: 400px;
  }
  @media (max-width: 1200px) {
    width: 450px;
  }
  @media (max-width: 1100px) {
    width: 380px;
  }
  @media (max-width: 950px) {
    width: 300px;
`;

const BigText = styled.p`
  font-size: 44px;
  font-weight: normal;
  font-style: normal;
  color: #ffffff;
  line-height: 1px;
  margin-bottom: 45px;
  margin-left: 7px;
`;

const ChartTextCointainer = styled.div`
  margin-bottom: 50px;
`;
export default function ChartOverview() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.bitcoin.data);
  const dataHourly = useSelector((state) => state.bitcoin.dataHourly);

  const getCurrentPriceSelector = () => {
    const currentPrice = data.prices[data.prices.length - 1][1];
    return Math.round(currentPrice).toLocaleString();
  };

  const getCurrentVolumeSelector = () => {
    const currentVolume =
      dataHourly.total_volumes[dataHourly.total_volumes.length - 1][1];
    return convertedNumber(currentVolume);
  };

  useEffect(() => {
    dispatch(getBitcoinData());
    dispatch(getBitcoinDataHourly());
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <Heading>Your Overview</Heading>
      <ChartsContainer>
        <Chart>
          <ChartTextCointainer>
            <ChartHeading>BTC</ChartHeading>
            {data && <BigText>${getCurrentPriceSelector()}</BigText>}
            <ChartHeading>
              {new Date().toLocaleDateString("default", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </ChartHeading>
          </ChartTextCointainer>
          <BitcoinChart data={data}/>
        </Chart>
        <Chart>
          <ChartTextCointainer>
            <ChartHeading>Volume 24h</ChartHeading>
            {dataHourly && <BigText>${getCurrentVolumeSelector()}</BigText>}
            <ChartHeading>
              {new Date().toLocaleDateString("default", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </ChartHeading>
          </ChartTextCointainer>
          <VolumeChart data={dataHourly}/>
        </Chart>
      </ChartsContainer>
    </>
  );
}
