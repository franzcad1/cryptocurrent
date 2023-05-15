import styled from "styled-components";

export const Heading = styled.p`
  font-size: 22px;
  font-weight: 500;
  font-style: normal;
  color: #ffffff;
  margin-top: 70px;
`;

export const CoinTable = styled.table`
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

export const TableContainer = styled.div`
  margin: auto;
  padding: 20px;
  background: #191b1f;
  border-radius: 15px;
  max-width: 1712px;
`;

export const TableData = styled.td`
  color: #ffffff;
  font-size: 19px;
  text-align: center;
  @media (max-width: 1000px) {
    font-size: 10px;
  }
`;

export const TableDataName = styled.td`
  color: #ffffff;
  font-size: 19px;
  text-align: center;
  @media (max-width: 1000px) {
    font-size: 10px;
  }
  cursor: pointer;
  text-decoration: underline;
`;

export const TableDataColored = styled.td`
  color: ${(props) => props.color};
  font-size: 19px;
  text-align: center;
  @media (max-width: 1000px) {
    font-size: 10px;
  }
`;

export const TableRow = styled.tr`
  height: 100px;
  border-bottom: 0.5px solid #2c2f36;
`;

export const TableHeadingRow = styled.tr`
  height: 30px;
`;

export const FullBar = styled.div`
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

export const BarContainer = styled.div`
  width: 269px;
  margin: auto;
  @media (min-width: 1200px) {
    width: 180px;
  }
`;

export const BarInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto 5px 5px auto;
`;

export const BarText = styled.p`
  line-height: 0px;
  font-size: 16px;
  @media (max-width: 1000px) {
    font-size: 13px;
  }
`;

export const CoinIcon = styled.img`
  width: 20px;
  margin-right: 7px;
`;

export const ChartContainer = styled.div`
  width: 150px;
  height: 60px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
