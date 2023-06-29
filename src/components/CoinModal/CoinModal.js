import React from "react";
import {
  ModalHeading,
  CloseIcon,
  CoinModalContainer,
  MainContainer,
  CoinContainer,
  InputContainer,
  InputDiv,
  IconContainer,
  CoinName,
  Input,
  ButtonContainer,
  CloseButton,
  SaveButton
} from "./CoinModal.styles";
export default function CoinModal(props) {
  return (
    <CoinModalContainer>
      <ModalHeading>Select Coins</ModalHeading>
      <CloseIcon onClick={props.handleClose} />
      <MainContainer>
        <CoinContainer>
          <IconContainer></IconContainer>
          <CoinName>Bitcoin (BTC)</CoinName>
        </CoinContainer>
        <InputContainer>
          <InputDiv>
            <Input placeholder="Select Coin" type="text" />
          </InputDiv>
          <InputDiv>
            <Input placeholder="Purchased Amount" type="number" />
          </InputDiv>
          <InputDiv>
            <Input placeholder="Purchased Date" type="date" />
          </InputDiv>
        </InputContainer>
      </MainContainer>
      <ButtonContainer>
        <CloseButton onClick={props.handleClose}>Cancel</CloseButton>
        <SaveButton>Save</SaveButton>
      </ButtonContainer>
    </CoinModalContainer>
  );
}
