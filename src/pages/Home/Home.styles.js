import styled from "styled-components";
import { RunningWithErrors } from "styled-icons/material";

export const HomeContainer = styled.div`
  margin: 25px auto;
  max-width: 1200px;
`;

export const ErrorContainer = styled.div`
  position: fixed;
  width: 600px;
  height: 60px;
  background: red;
  bottom: 0px;
  right: 25%;
  left: 50%;
  margin-left: -300px;
  border-radius: 15px 15px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const Error = styled.h1`
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  font-style: normal;
  color: #ffffff;
`;

export const ErrorIcon = styled(RunningWithErrors)`
  width: 22px;
  height: 22px;
  color: #ffffff;
`;