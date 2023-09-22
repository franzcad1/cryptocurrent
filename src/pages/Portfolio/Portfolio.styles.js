import styled from "styled-components";


export const PortfolioContainer = styled.div`
  margin: 25px auto;
  max-width: 1200px;
  filter: ${props => props.isModalOpen ? 'blur(4px)' : 'blur(0px)'};
`;

export const Heading = styled.p`
  font-size: 22px;
  font-weight: 500;
  font-style: normal;
  color: ${(props) => props.theme.main};
  margin-top: 70px;
`;

export const AddButton = styled.div`
  width: 506px;
  height: 76px;
  border-radius: 12px;
  background: #06d554;
  color: ${(props) => props.theme.main};
  margin: auto;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  cursor: pointer;
`;


export const CenteredText = styled.p`
font-size: 22px;
font-weight: 500;
font-style: normal;
color: ${(props) => props.theme.main};
text-align: center;
margin-top: 70px;
`;