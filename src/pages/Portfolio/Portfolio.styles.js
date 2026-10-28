import styled from "styled-components";

export const PortfolioContainer = styled.div`
  margin: 25px auto;
  max-width: 1200px;
  filter: ${props => props.isModalOpen ? 'blur(4px)' : 'blur(0px)'};
`;

export const Heading = styled.p`
  font-size: 22px;
  font-weight: 500;
  color: ${(props) => props.theme.main};
  margin-top: 30px;
`;

export const AddButton = styled.div`
  width: 200px;
  height: 48px;
  border-radius: 12px;
  background: #06d554;
  color: #fff;
  margin: 24px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  &:hover { opacity: 0.85; }
`;

export const CenteredText = styled.p`
  font-size: 16px;
  color: ${(props) => props.theme.main};
  opacity: 0.5;
  text-align: center;
  margin-top: 60px;
`;

export const SummaryRow = styled.div`
  display: flex;
  gap: 16px;
  margin: 24px 0 8px;
`;

export const SummaryCard = styled.div`
  flex: 1;
  background: ${props => props.theme.background};
  border-radius: 12px;
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SummaryLabel = styled.p`
  font-size: 13px;
  color: ${props => props.theme.main};
  opacity: 0.5;
  margin: 0;
`;

export const SummaryValue = styled.p`
  font-size: 22px;
  font-weight: 500;
  color: ${props => props.theme.main};
  margin: 0;
`;

export const SummaryGain = styled.p`
  font-size: 22px;
  font-weight: 500;
  color: ${props => props.positive ? "#06d554" : "#fe1040"};
  margin: 0;
`;
