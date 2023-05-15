import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import BitcoinChart from "../BitcoinChart/BitcoinChart";
import VolumeChart from "../VolumeChart/VolumeChart";
import { convertedNumber } from "../../utils/convertedNumber";
import { getBitcoinData } from "../../store/bitcoin/bitcoinActions";
import {
  Heading,
  ChartHeading,
  ChartsContainer,
  Chart,
  BigText,
  ChartTextCointainer,
} from "./ChartsOverview.styles";

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
          <BitcoinChart data={data} />
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
          <VolumeChart data={dataHourly} />
        </Chart>
      </ChartsContainer>
    </>
  );
}
