import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const Heading = styled.p`
  font-size: 22px;
  font-weight: 500;
  font-style: normal;
  text-align: left;
  color: #ffffff;
`;

const ChartsContainer = styled.div`
  display: flex;
  gap: 46px;
  justify-content: center;
`;

const Chart = styled.div`
  width: 833px;
  max-width: 833px;
  height: 449px;
  background: #191b1f;
  border-radius: 15px;
`;

export default function BitcoinChart() {
  const [data, setData] = useState([]);
  const [bitcoinPriceData, setBitcoinPriceData] = useState(null);
  const [mappedData, setMappedData] = useState(null);
  const getBitcoinData = async () => {
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=cad&days=30&interval=daily`
      );
      setData(data);
      setBitcoinPriceData(
        data.prices.map((values) => ({
          x: values[0],
          y: values[1],
        }))
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Heading>Your Overview</Heading>
      <ChartsContainer>
        <Chart>
        </Chart>
        <Chart></Chart>
      </ChartsContainer>
    </>
  );
}
