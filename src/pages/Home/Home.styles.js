import styled from "styled-components";
import { RunningWithErrors } from "styled-icons/material";

export const HomeContainer = styled.div`
  margin: 25px auto;
  max-width: 1200px;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalBox = styled.div`
  background: ${props => props.theme.background};
  border-radius: 16px;
  padding: 40px 48px;
  max-width: 480px;
  width: 90%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
`;

export const ErrorIcon = styled(RunningWithErrors)`
  width: 48px;
  height: 48px;
  color: #e5534b;
`;

export const ModalTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: ${props => props.theme.main};
  margin: 0;
`;

export const ModalText = styled.p`
  font-size: 14px;
  color: ${props => props.theme.main};
  opacity: 0.7;
  margin: 0;
  line-height: 1.6;
`;

export const ModalClose = styled.button`
  margin-top: 8px;
  background: #2172e5;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 10px 32px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  &:hover { opacity: 0.85; }
`;