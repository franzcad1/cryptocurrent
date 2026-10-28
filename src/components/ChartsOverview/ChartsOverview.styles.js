import styled from "styled-components";

export const Heading = styled.p`
  font-size: 22px;
  font-weight: 500;
  font-style: normal;
  color: ${props => props.theme.main};
`;

export const ChartHeading = styled.p`
  font-size: 22px;
  font-weight: 500;
  font-style: normal;
  color: ${props => props.theme.main};
  line-height: 1px;
  margin-bottom: 0px;
`;

export const ChartsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Chart = styled.div`
  width: 550px;
  background: ${props => props.theme.background};
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
  color: ${props => props.theme.main};
  line-height: 1px;
  margin-bottom: 45px;
  margin-left: 7px;
`;

export const ChartTextCointainer = styled.div`
  margin-bottom: 50px;
`;

const shimmer = `
  background: linear-gradient(90deg, rgba(255,255,255,0.05) 25%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.05) 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 8px;
  @keyframes shimmer { 0% { background-position: 200% 0 } 100% { background-position: -200% 0 } }
`;

export const SkeletonChart = styled.div`
  ${shimmer}
  width: 100%;
  height: 200px;
`;

export const SkeletonText = styled.div`
  ${shimmer}
  height: ${props => props.height || "20px"};
  width: ${props => props.width || "100%"};
  margin-bottom: ${props => props.mb || "12px"};
`;