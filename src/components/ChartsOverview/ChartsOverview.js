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
  SkeletonChart,
  SkeletonText,
} from "./ChartsOverview.styles";

export default function ChartOverview() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.bitcoin.data);
  const dataHourly = useSelector((state) => state.bitcoin.dataHourly);
  const isLoading = useSelector((state) => state.bitcoin.isLoading);

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
    const t = setTimeout(() => dispatch(getBitcoinData()), 4000);
    return () => clearTimeout(t);
    //eslint-disable-next-line
  }, []);

  const dateLabel = new Date().toLocaleDateString("default", {
    month: "short", day: "numeric", year: "numeric",
  });

  return (
    <>
      <Heading>Your Overview</Heading>
      <ChartsContainer>
        <Chart>
          <ChartTextCointainer>
            <ChartHeading>BTC</ChartHeading>
            {data && !isLoading
              ? <BigText>${getCurrentPriceSelector()}</BigText>
              : <SkeletonText height="44px" width="180px" mb="45px" />}
            <ChartHeading>{dateLabel}</ChartHeading>
          </ChartTextCointainer>
          {data && !isLoading ? <BitcoinChart data={data} /> : <SkeletonChart />}
        </Chart>
        <Chart>
          <ChartTextCointainer>
            <ChartHeading>Volume 24h</ChartHeading>
            {dataHourly && !isLoading
              ? <BigText>${getCurrentVolumeSelector()}</BigText>
              : <SkeletonText height="44px" width="180px" mb="45px" />}
            <ChartHeading>{dateLabel}</ChartHeading>
          </ChartTextCointainer>
          {dataHourly && !isLoading ? <VolumeChart data={dataHourly} /> : <SkeletonChart />}
        </Chart>
      </ChartsContainer>
    </>
  );
}
