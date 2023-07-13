import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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
  SaveButton,
  ResultModal,
  ResultContainer,
  CoinIcon
} from "./CoinModal.styles";
import { searchCoinData } from "../../store/search/searchActions";
import { getCoin } from "../../store/coin/coinActions";
export default function CoinModal(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showResults, setShowResults] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const [selectedCoin, setSelectedCoin] = useState(false);
  const coin = useSelector((state) => state.coin);
  const coins = useSelector((state) => state.search.coins);

  const handleSearchChange = (e) => {
    if (e.target.value !== "") {
      dispatch(searchCoinData(e.target.value));
      setTimeout(() => {
        setShowResults(true);
      }, 1000);
    } else {
      setShowResults(false);
    }
    setSearchVal(e.target.value);
  };

  const handleCoinSelect = (coin) => {
    dispatch(getCoin(coin.id));
    setSelectedCoin(true);
    setSearchVal('');
    setShowResults(false);
  };

  return (
    <CoinModalContainer>
      <ModalHeading>Select Coins</ModalHeading>
      <CloseIcon onClick={props.handleClose} />
      <MainContainer>
        <CoinContainer>
          <IconContainer>
            {selectedCoin && (coin.coinData && <CoinIcon src={coin.coinData.image.large}/>)}
          </IconContainer>
          {selectedCoin ? (coin.coinData &&
            <CoinName>{coin.coinData.name} ({coin.coinData.symbol.toUpperCase()})</CoinName>
          ) : (
            <CoinName>Select Coin</CoinName>
          )}
        </CoinContainer>
        <InputContainer>
          <InputDiv>
            <Input
              onChange={(e) => handleSearchChange(e)}
              placeholder="Select Coin"
              type="text"
              value={searchVal}
            />
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
      {showResults && (
        <ResultModal>
          {coins &&
            coins.map((coin) => (
              <ResultContainer onClick={() => handleCoinSelect(coin)}>
                {coin.name}
              </ResultContainer>
            ))}
        </ResultModal>
      )}
    </CoinModalContainer>
  );
}
