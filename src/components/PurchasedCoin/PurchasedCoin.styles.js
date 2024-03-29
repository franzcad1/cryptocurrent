import styled from 'styled-components'
import { Pencil } from "styled-icons/boxicons-solid";
import {Delete} from 'styled-icons/fluentui-system-filled'
export const CoinPortfolioContainer = styled.div`
  height: 295px;
  width: 100%
  background: #191b1f;
  display: flex;
  gap: 20px;
  align-items: center;
  font-size: 20px;
  margin-bottom: 30px;
`;

export const CoinContainer = styled.div`
  border-radius: 12px;
  width: 20%;
  height: 100%;
  background: ${(props) => props.theme.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const IconContainer = styled.div`
  border-radius: 8px;
  width: 104px;
  height: 103px;
  background: ${(props) => props.theme.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CoinName = styled.p`
  font-size: 22px;
  font-weight: normal;
  font-style: normal;
  text-align: center;
  color: ${(props) => props.theme.main};
  line-height: 2;
`;

export const PriceAndCoinContainer = styled.div`
  border-radius: 12px;
  width: 80%;
  height: 100%;
  display flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Label = styled.p`
  font-size: 13px;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: ${(props) => props.theme.main};
  line-height: 0;
`;

export const Number = styled.p`
  font-size: 13px;
  font-weight: bold;
  font-style: normal;
  text-align: left;
  color: #00fc2a;
  line-height: 0;
`;

export const LabelEditContainer = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

export const BoxContainer = styled.div`
  width: 37px;
  height: 37px;
  background: ${(props) => props.theme.secondary};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const NumbersContainer = styled.div`
  height: 100px;
  border-radius: 12px;
  background: ${(props) => props.theme.background};
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.main};
  justify-content: space-around;
`;

export const LabelWithNumberContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Icon = styled.img`
  width: 44.4px;
  height: 44.4px;
`;

export const EditIcon = styled(Pencil)`
  width: 14.1px;
  height: 14.6px;
  color: #ffb528;
`;

export const DeleteIcon = styled(Delete)`
  width: 14.1px;
  height: 14.6px;
  color: red;
`;

export const NumberColored = styled.td`
  color: ${(props) => props.color};
  font-size: 19px;
`;

export const FullBar = styled.div`
  display: flex;
  flex: 1 1 0%;
  width: 55px;
  height: 13px;
  border-radius: 8px;
  overflow: hidden;
  background-color: #00fc2a;
`;

export const PartialBar = styled.div`
  height: 100%;
  width: ${(props) => props.width}%;
  border-radius: 8px;
  background-color: ${(props) => props.theme.main};
`;
