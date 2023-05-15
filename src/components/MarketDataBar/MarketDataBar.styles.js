import styled from "styled-components";
import { DownArrow } from "@styled-icons/boxicons-regular";

export const MainContainer = styled.div`
  margin: 0px auto;
  max-width: 906px;
  height: 55px;
  background: #191b1f;
  border-radius: 0 0 10px 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const TextContainer = styled.div`
  font-size: 17px;
  font-weight: normal;
  font-style: normal;
  color: #ffffff;
`;

export const TextWithBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  font-weight: normal;
  font-style: normal;
  color: #ffffff;
  gap: 7px;
`;

export const CoinIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export const DownIcon = styled(DownArrow)`
  color: red;
  width: 10px;
  height: 10px;
  margin-left: 5px;
`;

export const UpIcon = styled(DownArrow)`
  color: #00ff5f;
  width: 10px;
  height: 10px;
  transform: rotate(180deg);
  margin-left: 5px;
`;