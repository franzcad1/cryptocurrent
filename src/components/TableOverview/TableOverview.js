import React from "react";
import styled from "styled-components";
import ProgressBar from "../ProgressBar/ProgressBar";

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

const TableData = styled.td`
  color: #ffffff;
  font-size: 19px;
  text-align: center;
`;

const TableRow = styled.tr`
  height: 100px;
  border-bottom: 0.5px solid #2c2f36;
`;

const TableHeadingRow = styled.tr`
  height: 30px;
`;

const BarContainer = styled.div`
  width: 269px;
  margin: auto;
`;

const BarInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BarText = styled.p`
  line-height: 0px;
  font-size: 19px;
`;

export default function TableOverview() {
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
            <TableRow>
              <TableData>1</TableData>
              <TableData>Bitcoin (BTC)</TableData>
              <TableData>$27,503</TableData>
              <TableData>-1.06%</TableData>
              <TableData>-4.93%</TableData>
              <TableData>-6.33%</TableData>
              <TableData>
                <BarContainer>
                  <BarInfo>
                    <BarText>$12.59B</BarText>
                    <BarText>$532.7B</BarText>
                  </BarInfo>
                  <FullBar />
                </BarContainer>
              </TableData>
              <TableData>
                <BarContainer>
                  <BarInfo>
                    <BarText>$12.59B</BarText>
                    <BarText>$532.7B</BarText>
                  </BarInfo>
                  <FullBar />
                </BarContainer>
              </TableData>
            </TableRow>
            <TableRow>
              <TableData>2</TableData>
              <TableData>Bitcoin (BTC)</TableData>
              <TableData>$27,503</TableData>
              <TableData>-1.06%</TableData>
              <TableData>-4.93%</TableData>
              <TableData>-6.33%</TableData>
              <TableData>
                <BarContainer>
                  <BarInfo>
                    <BarText>$12.59B</BarText>
                    <BarText>$532.7B</BarText>
                  </BarInfo>
                  <FullBar />
                </BarContainer>
              </TableData>
              <TableData>
                <BarContainer>
                  <BarInfo>
                    <BarText>$12.59B</BarText>
                    <BarText>$532.7B</BarText>
                  </BarInfo>
                  <FullBar />
                </BarContainer>
              </TableData>
            </TableRow>
          </tbody>
        </CoinTable>
      </TableContainer>
    </>
  );
}
