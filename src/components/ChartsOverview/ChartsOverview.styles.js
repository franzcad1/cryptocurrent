import styled from "styled-components";

export const Heading = styled.p`
  font-size: 22px;
  font-weight: 500;
  font-style: normal;
  color: #ffffff;
`;

export const ChartHeading = styled.p`
  font-size: 22px;
  font-weight: 500;
  font-style: normal;
  color: #ffffff;
  line-height: 1px;
  margin-bottom: 0px;
`;

export const ChartsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Chart = styled.div`
  width: 550px;
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

export const BigText = styled.p`
  font-size: 44px;
  font-weight: normal;
  font-style: normal;
  color: #ffffff;
  line-height: 1px;
  margin-bottom: 45px;
  margin-left: 7px;
`;

export const ChartTextCointainer = styled.div`
  margin-bottom: 50px;
`;