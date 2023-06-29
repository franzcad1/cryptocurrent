import styled from "styled-components";
import { CloseOutline } from "styled-icons/evaicons-outline";
export const CoinModalContainer = styled.div`
  width: 1087px;
  height: 504px;
  border-radius: 12px;
  background: ${(props) => props.theme.secondary};
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 99999;
`;

export const ModalHeading = styled.h1`
  height: 40px;
  font-size: 28px;
  font-weight: normal;
  font-style: normal;
  text-align: center;
  color: ${(props) => props.theme.main};
`;

export const CloseIcon = styled(CloseOutline)`
  width: 50px;
  height: 50px;
  color: #06d554;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
`;

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  margin-top: 40px;
`;
export const InputContainer = styled.div`
  width: 508px;
  height: 233px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const CoinContainer = styled.div`
  width: 204px;
  height: 233px;
  border-radius: 12px;
  background: ${(props) => props.theme.background};
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const InputDiv = styled.div`
  width: 508px;
  height: 66px;
  border-radius: 12px;
  background: ${(props) => props.theme.background};
  font-size: 19px;
  color: ${(props) => props.theme.main};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconContainer = styled.div`
  border-radius: 8px;
  width: 83px;
  height: 82px;
  background: ${(props) => props.theme.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CoinName = styled.p`
  font-size: 19px;
  font-weight: normal;
  font-style: normal;
  text-align: center;
  color: ${(props) => props.theme.main};
  line-height: 2;
`;

export const Input = styled.input`
  background: ${(props) => props.theme.background};
  width: 480px;
  height: 60px;
  border: none;
  font-size: 19px;
  color: ${(props) => props.theme.main};
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 50px;
`;

export const CloseButton = styled.button`
  width: 294px;
  height: 60px;
  color: #06d554;
  border-radius: 12px;
  background: ${(props) => props.theme.main};
  border: none;
  cursor: pointer;
  font-weight: bold;
`;

export const SaveButton = styled.button`
  width: 294px;
  height: 60px;
  color: ${(props) => props.theme.main};
  border-radius: 12px;
  background: #06d554;
  border: none;
  cursor: pointer;
  font-weight: bold;
`;
