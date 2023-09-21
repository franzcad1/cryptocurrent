import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCoin } from "../../store/coin/coinActions";
import {
  CoinPortfolioContainer,
  CoinContainer,
  PriceAndCoinContainer,
  IconContainer,
  CoinName,
  Label,
  LabelEditContainer,
  EditContainer,
  NumbersContainer,
  LabelWithNumberContainer,
  Number,
  Icon,
  EditIcon,
  FullBar,
  PartialBar,
} from "./PurchasedCoin.styles";
export default function PurchasedCoin(props) {
  const dispatch = useDispatch();
  const coin = useSelector((state) => state.coin);
  const [selectedCoin, setSelectedCoin] = useState(null);

  useEffect(() => {
    dispatch(getCoin(props.purchasedCoin.coinID));
    setSelectedCoin(coin);
    // eslint-disable-next-line
  }, [props.purchasedCoin.coinID]);
  return (
    <>
      {selectedCoin && (
        <CoinPortfolioContainer>
          <CoinContainer>
            <IconContainer>
              <Icon src={selectedCoin.coinData.image.large} />
            </IconContainer>
            <CoinName>
              {selectedCoin.coinData.name} (
              {selectedCoin.coinData.symbol.toUpperCase()})
            </CoinName>
          </CoinContainer>
          <PriceAndCoinContainer>
            <LabelEditContainer>
              <Label>Market Price:</Label>
            </LabelEditContainer>
            <NumbersContainer>
              <LabelWithNumberContainer>
                <Label>Current Price:</Label>
                <Number>
                  ${selectedCoin.coinData.market_data.current_price.cad.toLocaleString()}
                </Number>
              </LabelWithNumberContainer>
              <LabelWithNumberContainer>
                <Label>Price Change 24h:</Label>
                <Number>$39,504</Number>
              </LabelWithNumberContainer>
              <LabelWithNumberContainer>
                <Label>Market Cap vs Volume:</Label>
                <Number>     {((
                  selectedCoin.coinData.market_data.total_volume.cad /
                  selectedCoin.coinData.market_data.market_cap.cad
                )* 100).toFixed(2)}%</Number>
                <FullBar>
                  <PartialBar width={((
                  selectedCoin.coinData.market_data.total_volume.cad /
                  selectedCoin.coinData.market_data.market_cap.cad
                )* 100)} />
                </FullBar>
              </LabelWithNumberContainer>
              <LabelWithNumberContainer>
                <Label>Circ Supply vs Max Supply:</Label>
                <Number>{((
                  selectedCoin.coinData.market_data.circulating_supply /
                  selectedCoin.coinData.market_data.total_supply
                )* 100).toFixed(2)}%</Number>
                <FullBar>
                  <PartialBar width={((
                  selectedCoin.coinData.market_data.circulating_supply /
                  selectedCoin.coinData.market_data.total_supply
                )* 100)} />
                </FullBar>
              </LabelWithNumberContainer>
            </NumbersContainer>
            <LabelEditContainer>
              <Label>Your Coin:</Label>
              <EditContainer>
                <EditIcon />
              </EditContainer>
            </LabelEditContainer>
            <NumbersContainer>
              <LabelWithNumberContainer>
                <Label>Coin Amount:</Label>
                <Number>{props.purchasedCoin.purchasedAmt}</Number>
              </LabelWithNumberContainer>
              <LabelWithNumberContainer>
                <Label>Amount Value:</Label>
                <Number> ${(selectedCoin.coinData.market_data.current_price.cad * props.purchasedCoin.purchasedAmt ).toLocaleString()}</Number>
              </LabelWithNumberContainer>
              <LabelWithNumberContainer>
                <Label>Purchase Date:</Label>
                <Number>{props.purchasedCoin.datePurchased}</Number>
              </LabelWithNumberContainer>
            </NumbersContainer>
          </PriceAndCoinContainer>
        </CoinPortfolioContainer>
      )}
    </>
  );
}
