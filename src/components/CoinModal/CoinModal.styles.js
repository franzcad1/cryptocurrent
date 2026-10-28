import styled from "styled-components";
import { CloseOutline } from "styled-icons/evaicons-outline";

export const CoinModalContainer = styled.div`
  width: 560px;
  border-radius: 16px;
  background: ${(props) => props.theme.secondary};
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 99999;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ModalHeading = styled.h1`
  font-size: 22px;
  font-weight: 600;
  text-align: center;
  color: ${(props) => props.theme.main};
  margin: 0;
`;

export const CloseIcon = styled(CloseOutline)`
  width: 32px;
  height: 32px;
  color: ${(props) => props.theme.main};
  opacity: 0.5;
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
  &:hover { opacity: 1; }
`;

export const CoinSelectRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  background: ${(props) => props.theme.background};
  border-radius: 12px;
  padding: 10px 16px;
  position: relative;
`;

export const CoinIcon = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  flex-shrink: 0;
`;

export const CoinIconPlaceholder = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: ${(props) => props.theme.secondary};
  flex-shrink: 0;
`;

export const CoinName = styled.span`
  font-size: 15px;
  font-weight: 500;
  color: ${(props) => props.theme.main};
  white-space: nowrap;
  min-width: 80px;
`;

export const Input = styled.input`
  background: transparent;
  border: none;
  font-size: 15px;
  color: ${(props) => props.theme.main};
  flex: 1;
  outline: none;
  &::placeholder { color: ${(props) => props.theme.main}; opacity: 0.35; }
`;

export const InputRow = styled.div`
  display: flex;
  gap: 10px;
`;

export const InputBox = styled.div`
  flex: 1;
  background: ${(props) => props.theme.background};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const InputLabel = styled.span`
  font-size: 11px;
  color: ${(props) => props.theme.main};
  opacity: 0.45;
  text-transform: uppercase;
  letter-spacing: 0.04em;
`;

export const InlineInput = styled.input`
  background: transparent;
  border: none;
  font-size: 15px;
  color: ${(props) => props.theme.main};
  width: 100%;
  outline: none;
  &::placeholder { color: ${(props) => props.theme.main}; opacity: 0.35; }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 4px;
`;

export const CloseButton = styled.button`
  flex: 1;
  height: 48px;
  color: ${(props) => props.theme.main};
  border-radius: 12px;
  background: ${(props) => props.theme.background};
  border: none;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  &:hover { opacity: 0.8; }
`;

export const SaveButton = styled.button`
  flex: 1;
  height: 48px;
  color: #fff;
  border-radius: 12px;
  background: #06d554;
  border: none;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  transition: opacity 0.2s;
  &:hover:not(:disabled) { opacity: 0.85; }
  &:disabled { opacity: 0.45; cursor: not-allowed; }
`;

export const ResultModal = styled.div`
  border-radius: 12px;
  background: ${(props) => props.theme.background};
  width: 100%;
  max-height: 180px;
  overflow-y: auto;
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  z-index: 10;
  box-shadow: 0 8px 24px rgba(0,0,0,0.3);
`;

export const ResultContainer = styled.div`
  padding: 10px 16px;
  font-size: 14px;
  color: ${(props) => props.theme.main};
  cursor: pointer;
  &:hover { background: rgba(255,255,255,0.06); }
`;

export const StatusText = styled.p`
  font-size: 12px;
  color: ${(props) => props.theme.main};
  opacity: 0.4;
  text-align: center;
  margin: 0;
`;

export const MainContainer = styled.div``;
export const InputContainer = styled.div``;
export const InputDiv = styled.div``;
export const IconContainer = styled.div``;
