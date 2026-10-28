import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ModalHeading,
  CloseIcon,
  CoinModalContainer,
  CoinSelectRow,
  CoinIcon,
  CoinIconPlaceholder,
  CoinName,
  Input,
  InputRow,
  InputBox,
  InputLabel,
  InlineInput,
  ButtonContainer,
  CloseButton,
  SaveButton,
  ResultModal,
  ResultContainer,
  StatusText,
} from "./CoinModal.styles";
import { searchCoinData } from "../../store/search/searchActions";
import { getCoin } from "../../store/coin/coinActions";

export default function CoinModal(props) {
  const dispatch = useDispatch();
  const [showResults, setShowResults] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const [coinID, setCoinID] = useState("");
  const [purchasedAmt, setPurchasedAmt] = useState("");
  const [purchasedPrice, setPurchasedPrice] = useState("");
  const [datePurchased, setDatePurchased] = useState("");
  const [selectedCoin, setSelectedCoin] = useState(null);
  const coin = useSelector((state) => state.coin);
  const coins = useSelector((state) => state.search.coins);

  const handleSearchChange = (e) => {
    const val = e.target.value;
    setSearchVal(val);
    if (val !== "") {
      dispatch(searchCoinData(val));
      setTimeout(() => setShowResults(true), 800);
    } else {
      setShowResults(false);
    }
  };

  const handleCoinSelect = (c) => {
    dispatch(getCoin(c.id));
    setCoinID(c.id);
    setSelectedCoin({ id: c.id, name: c.name, symbol: c.symbol, thumb: c.thumb });
    setSearchVal("");
    setShowResults(false);
  };

  const coinLoading = selectedCoin && !coin.coinData && !coin.hasError;
  const coinReady = selectedCoin && coin.coinData && coin.coinData.id === selectedCoin.id;
  const coinError = selectedCoin && coin.hasError && (!coin.coinData || coin.coinData.id !== selectedCoin.id);

  const canSave = coinReady && purchasedAmt && purchasedPrice && datePurchased;

  const handleSave = () => {
    if (!canSave) return;
    const snapshot = {
      coinID,
      name: coin.coinData.name,
      symbol: coin.coinData.symbol,
      image: coin.coinData.image.large,
      purchasedAmt: parseFloat(purchasedAmt),
      purchasedPrice: parseFloat(purchasedPrice),
      datePurchased,
      cachedPrice: coin.coinData.market_data.current_price.cad,
      lastUpdated: Date.now(),
    };
    props.handleSave(snapshot);
  };

  const getSaveLabel = () => {
    if (coinLoading) return "Fetching price...";
    if (coinError) return "Price unavailable — retry?";
    return "Save";
  };

  return (
    <CoinModalContainer>
      <ModalHeading>Add Holding</ModalHeading>
      <CloseIcon onClick={props.handleClose} />

      <CoinSelectRow>
        {selectedCoin ? (
          <CoinIcon src={coin.coinData?.image?.large || selectedCoin.thumb} alt={selectedCoin.name} />
        ) : (
          <CoinIconPlaceholder />
        )}
        {selectedCoin ? (
          <CoinName>{selectedCoin.name} <span style={{ opacity: 0.5, fontSize: "13px" }}>{selectedCoin.symbol.toUpperCase()}</span></CoinName>
        ) : null}
        <Input
          onChange={handleSearchChange}
          placeholder={selectedCoin ? "Change coin..." : "Search coin..."}
          type="text"
          value={searchVal}
        />
        {showResults && (
          <ResultModal>
            {coins && coins.map((c) => (
              <ResultContainer key={c.id} onClick={() => handleCoinSelect(c)}>
                {c.name} <span style={{ opacity: 0.5, fontSize: "12px" }}>{c.symbol?.toUpperCase()}</span>
              </ResultContainer>
            ))}
          </ResultModal>
        )}
      </CoinSelectRow>

      {coinError && (
        <StatusText style={{ color: "#fe1040", opacity: 1 }}>
          Rate limited — <span style={{ cursor: "pointer", textDecoration: "underline" }} onClick={() => dispatch(getCoin(selectedCoin.id))}>retry</span>
        </StatusText>
      )}

      <InputRow>
        <InputBox>
          <InputLabel>Amount</InputLabel>
          <InlineInput placeholder="0.00" type="number" value={purchasedAmt} onChange={(e) => setPurchasedAmt(e.target.value)} />
        </InputBox>
        <InputBox>
          <InputLabel>Buy Price (CAD)</InputLabel>
          <InlineInput placeholder="0.00" type="number" value={purchasedPrice} onChange={(e) => setPurchasedPrice(e.target.value)} />
        </InputBox>
        <InputBox>
          <InputLabel>Date</InputLabel>
          <InlineInput type="date" value={datePurchased} onChange={(e) => setDatePurchased(e.target.value)} />
        </InputBox>
      </InputRow>

      <ButtonContainer>
        <CloseButton onClick={props.handleClose}>Cancel</CloseButton>
        <SaveButton onClick={handleSave} disabled={!canSave || coinLoading}>
          {getSaveLabel()}
        </SaveButton>
      </ButtonContainer>
    </CoinModalContainer>
  );
}
