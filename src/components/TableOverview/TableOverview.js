import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { getCoinList } from "../../store/coinList/coinListActions";
import { convertedNumber } from "../../utils/convertedNumber";
import SparklineChart from "../SparklineChart/SparklineChart";

const Heading = styled.p`
  font-size: 22px;
  font-weight: 500;
  font-style: normal;
  color: #ffffff;
  margin-top: 70px;
`;

const CoinTable = styled.table`
  text-align: center;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  background: #191b1f;
  border-radius: 15px;
  border-collapse: collapse;
  color: #ffffff;
  @media (max-width: 1000px) {
    font-size: 13px;
  }
`;

const TableContainer = styled.div`
  margin: auto;
  padding: 20px;
  background: #191b1f;
  border-radius: 15px;
  max-width: 1712px;
`;

const TableData = styled.td`
  color: #ffffff;
  font-size: 19px;
  text-align: center;
  @media (max-width: 1000px) {
    font-size: 10px;
  }
`;

const TableDataColored = styled.td`
  color: ${(props) => props.color};
  font-size: 19px;
  text-align: center;
  @media (max-width: 1000px) {
    font-size: 10px;
  }
`;

const TableRow = styled.tr`
  height: 100px;
  border-bottom: 0.5px solid #2c2f36;
`;

const TableHeadingRow = styled.tr`
  height: 30px;
`;

const FullBar = styled.div`
  display: flex;
  flex: 1 1 0%;
  width: 100%;
  height: 8px;
  border-radius: 8px;
  overflow: hidden;
  background-color: #2172e5;
`;

export const PartialBar = styled.div`
  height: 100%;
  width: ${(props) => props.width}%;
  border-radius: 8px;
  background-color: #ffffff;
`;

const BarContainer = styled.div`
  width: 269px;
  margin: auto;
  @media (min-width: 1200px) {
    width: 180px;
  }
`;

const BarInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto 5px 5px auto;
`;

const BarText = styled.p`
  line-height: 0px;
  font-size: 19px;
  @media (max-width: 1000px) {
    font-size: 13px;
  }
`;

const CoinIcon = styled.img`
  width: 20px;
  margin-right: 7px;
`;

const ChartContainer = styled.div`
  width: 150px;
  height: 60px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function TableOverview(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoinList());
    //eslint-disable-next-line
  }, []);
  return (
    <>
      <Heading>Your Overview</Heading>
      <TableContainer>
        <CoinTable>
          <thead>
            <TableHeadingRow>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>1h%</th>
              <th>24h%</th>
              <th>7d%</th>
              <th>24h Volume/Market Cap</th>
              <th>Circulating/Total Supply</th>
              <th>Last 7d</th>
            </TableHeadingRow>
          </thead>
          <tbody>
            {props.coinList.coins.length > 0 &&
              props.coinList.coins.map((coin) => (
                <TableRow>
                  <TableData>{coin.market_cap_rank}</TableData>
                  <TableData>
                    <CoinIcon src={coin.image} />
                    {coin.name} ({coin.symbol.toUpperCase()})
                  </TableData>
                  <TableData>${coin.current_price.toLocaleString()}</TableData>
                  <TableDataColored
                    color={
                      coin.price_change_percentage_1h_in_currency.toFixed(2) > 0
                        ? "#00fc2a"
                        : " #fe1040"
                    }
                  >
                    {coin.price_change_percentage_1h_in_currency.toFixed(2)}%
                  </TableDataColored>
                  <TableDataColored
                    color={
                      coin.price_change_percentage_24h_in_currency.toFixed(2) >
                      0
                        ? "#00fc2a"
                        : " #fe1040"
                    }
                  >
                    {coin.price_change_percentage_24h_in_currency.toFixed(2)}%
                  </TableDataColored>
                  <TableDataColored
                    color={
                      coin.price_change_percentage_7d_in_currency.toFixed(2) > 0
                        ? "#00fc2a"
                        : " #fe1040"
                    }
                  >
                    {coin.price_change_percentage_7d_in_currency.toFixed(2)}%
                  </TableDataColored>
                  <TableData>
                    <BarContainer>
                      <BarInfo>
                        <BarText>${convertedNumber(coin.total_volume)}</BarText>
                        <BarText>${convertedNumber(coin.market_cap)}</BarText>
                      </BarInfo>
                      <FullBar>
                        <PartialBar
                          width={(coin.total_volume / coin.market_cap) * 100}
                        />
                      </FullBar>
                    </BarContainer>
                  </TableData>
                  <TableData>
                    <BarContainer>
                      <BarInfo>
                        <BarText>
                          ${convertedNumber(coin.circulating_supply)}
                        </BarText>
                        <BarText>${convertedNumber(coin.total_supply)}</BarText>
                      </BarInfo>
                      <FullBar>
                        <PartialBar
                          width={
                            (coin.circulating_supply / coin.total_supply) * 100
                          }
                        />
                      </FullBar>
                    </BarContainer>
                  </TableData>
                  <TableData>
                    <ChartContainer>
                      <SparklineChart coin={coin} />
                    </ChartContainer>
                  </TableData>
                </TableRow>
              ))}
          </tbody>
        </CoinTable>
      </TableContainer>
    </>
  );
}
