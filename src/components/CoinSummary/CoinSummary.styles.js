import styled from "styled-components";
import { Link45deg, Stack, PlusSquareFill } from "styled-icons/bootstrap";
import { DownArrow } from "@styled-icons/boxicons-regular";

export const SummaryContainer = styled.div`
  display: flex;
  gap: 60px;
  justify-content: space-between;
`;

export const CoinLink = styled.div`
  height: 64px;
  width: 100%;
  background: ${props => props.theme.background};
  font-size: 15px;
  font-weight: normal;
  font-style: normal;
  text-align: center;
  color: ${props => props.theme.main};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border-radius: 15px;
  cursor: pointer;
`;

export const CoinInfo = styled.div`
  height: 379px;
  width: 20%;
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: space-between;
`;

export const LeftContainer = styled.div`
  height: 64px;
  width: 100%;
  height: 295px;
  background: ${props => props.theme.background};
  border-radius: 15px;
`;
export const MiddleContainer = styled.div`
  height: 379px;
  width: 35%;
  background: ${props => props.theme.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  border-radius: 15px;
`;

export const RightContainer = styled.div`
  height: 379px;
  width: 500px;
  background: ${props => props.theme.background};
  font-size: 18px;
  font-weight: normal;
  font-style: normal;
  text-align: center;
  color: ${props => props.theme.main};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  border-radius: 15px;
`;

export const Icon = styled.img`
  width: 44.4px;
  height: 44.4px;
`;

export const IconContainer = styled.div`
  width: 104px;
  height: 103px;
  background: ${props => props.theme.secondary};
  border-radius: 8px;
  margin: 40px auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CoinName = styled.p`
  font-size: 25px;
  font-weight: normal;
  font-style: normal;
  text-align: center;
  color: ${props => props.theme.main};
  line-height: 2;
`;

export const LinkIcon = styled(Link45deg)`
  width: 15px;
  height: 15px;
  color: ${props => props.theme.main};
`;

export const StackIcon = styled(Stack)`
  width: 22px;
  height: 22px;
  color: ${props => props.theme.main};
`;

export const PlusIcon = styled(PlusSquareFill)`
  width: 22px;
  height: 22px;
  color: #2172e5;
`;

export const NumbersContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  font-size: 19px;
  font-weight: normal;
  font-style: normal;
  text-align: center;
  color: ${(props) => props.color};
  margin-top: 35px;
`;

export const Percentage = styled.p`
  font-size: 19px;
  font-weight: normal;
  font-style: normal;
  text-align: center;
  color: ${(props) => props.color};
`;

export const AllTimeContainer = styled.div`
  font-size: 18px;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: ${props => props.theme.main};
`;

export const Price = styled.h1`
  font-size: 44px;
  font-weight: normal;
  font-style: normal;
  text-align: center;
  color: ${props => props.theme.main};
  line-height: 0;
`;

export const DateTime = styled.p`
  font-size: 18px;
  font-weight: normal;
  font-style: normal;
  text-align: center;
  color: ${props => props.theme.main};
  line-height: 0;
`;

export const DownIcon = styled(DownArrow)`
  color: red;
  width: 10px;
  height: 10px;
`;

export const UpIcon = styled(DownArrow)`
  color: #00ff5f;
  width: 10px;
  height: 10px;
  transform: rotate(180deg);
`;

export const IconWithTextContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  gap: 5px;
`;
export const ArrowContainer = styled.div`
  margin-right: 10px;
`;

export const CenteredDiv = styled.div`
  margin-left: 50px;
  width: 90%;
`;