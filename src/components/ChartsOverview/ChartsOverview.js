import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import BitcoinChart from "../BitcoinChart/BitcoinChart";

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
  //const [data, setData] = useState([]);


  useEffect(() => {}, []);

  return (
    <>
      <Heading>Your Overview</Heading>
      <ChartsContainer>
        <Chart>
          <ChartTextCointainer>
            <ChartHeading>BTC</ChartHeading>
            <BigText>$28,856</BigText>
            <ChartHeading>
              {new Date().toLocaleDateString("default", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </ChartHeading>
          </ChartTextCointainer>
          <BitcoinChart />
        </Chart>
        <Chart>
          <ChartTextCointainer>
            <ChartHeading>Volume 24h</ChartHeading>
            <BigText>$807.24 bln</BigText>
            <ChartHeading>
              {new Date().toLocaleDateString("default", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </ChartHeading>
          </ChartTextCointainer>
        </Chart>
      </ChartsContainer>
    </>
  );
}
