import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getCoinList,
  getMoreCoinList,
} from "../../store/coinList/coinListActions";
import { convertedNumber } from "../../utils/convertedNumber";
import SparklineChart from "../SparklineChart/SparklineChart";
import InfiniteScroll from "react-infinite-scroll-component";
import {
  Heading,
  CoinTable,
  TableContainer,
  TableData,
  TableDataName,
  TableDataColored,
  TableRow,
  TableHeadingRow,
  FullBar,
  PartialBar,
  BarContainer,
  BarInfo,
  BarText,
  CoinIcon,
  ChartContainer,
} from "./TableOverview.styles";
export default function TableOverview(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCoinList());
    //eslint-disable-next-line
  }, []);

  const handleNameClick = (coin) => {
    navigate(`/coin/${coin.id}`);
  };
  return (
    <>
      <Heading>Your Overview</Heading>
      {props.coinList.coins.length > 0 && (
        <InfiniteScroll
          dataLength={props.coinList.coins.length}
          next={() => dispatch(getMoreCoinList())}
          hasMore={props.coinList.hasMore}
        >
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
                {props.coinList.coins.map((coin) => (
                  <TableRow key={coin.id}>
                    <TableData>{coin.market_cap_rank}</TableData>
                    <TableDataName onClick={() => handleNameClick(coin)}>
                      <CoinIcon src={coin.image} />
                      {coin.name} ({coin.symbol.toUpperCase()})
                    </TableDataName>
                    <TableData>
                      ${coin.current_price.toLocaleString()}
                    </TableData>
                    <TableDataColored
                      color={
                        coin.price_change_percentage_1h_in_currency.toFixed(2) >
                        0
                          ? "#00fc2a"
                          : " #fe1040"
                      }
                    >
                      {coin.price_change_percentage_1h_in_currency.toFixed(2)}%
                    </TableDataColored>
                    <TableDataColored
                      color={
                        coin.price_change_percentage_24h_in_currency.toFixed(
                          2
                        ) > 0
                          ? "#00fc2a"
                          : " #fe1040"
                      }
                    >
                      {coin.price_change_percentage_24h_in_currency.toFixed(2)}%
                    </TableDataColored>
                    <TableDataColored
                      color={
                        coin.price_change_percentage_7d_in_currency.toFixed(2) >
                        0
                          ? "#00fc2a"
                          : " #fe1040"
                      }
                    >
                      {coin.price_change_percentage_7d_in_currency.toFixed(2)}%
                    </TableDataColored>
                    <TableData>
                      <BarContainer>
                        <BarInfo>
                          <BarText>
                            ${convertedNumber(coin.total_volume)}
                          </BarText>
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
                          <BarText>
                            ${convertedNumber(coin.total_supply)}
                          </BarText>
                        </BarInfo>
                        <FullBar>
                          <PartialBar
                            width={
                              (coin.circulating_supply / coin.total_supply) *
                              100
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
        </InfiniteScroll>
      )}
    </>
  );
}
