import React from "react";
import {
  CoinPortfolioContainer,
  CoinContainer,
  IconContainer,
  CoinName,
  Icon,
  PriceAndCoinContainer,
  NumbersContainer,
  LabelWithNumberContainer,
  Label,
  NumberValue,
  GainValue,
  LabelEditContainer,
  BoxContainer,
  DeleteIcon,
} from "./PurchasedCoin.styles";

export default function PurchasedCoin({ holding, handleDelete }) {
  const { coinID, name, symbol, image, purchasedAmt, purchasedPrice, datePurchased, cachedPrice } = holding;

  const currentValue = cachedPrice * purchasedAmt;
  const costBasis = purchasedPrice * purchasedAmt;
  const gain = currentValue - costBasis;
  const gainPct = costBasis > 0 ? (gain / costBasis) * 100 : 0;
  const isPositive = gain >= 0;

  const fmt = (n) => n.toLocaleString("en-CA", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <CoinPortfolioContainer>
      <CoinContainer>
        <IconContainer>
          <Icon src={image} alt={name} />
        </IconContainer>
        <CoinName>{name}<br /><span style={{ fontSize: "14px", opacity: 0.6 }}>{symbol.toUpperCase()}</span></CoinName>
      </CoinContainer>

      <PriceAndCoinContainer>
        <LabelEditContainer>
          <Label style={{ fontSize: "15px", fontWeight: 500, opacity: 1 }}>Your Holdings</Label>
          <BoxContainer onClick={() => handleDelete(coinID)}>
            <DeleteIcon />
          </BoxContainer>
        </LabelEditContainer>

        <NumbersContainer>
          <LabelWithNumberContainer>
            <Label>Amount</Label>
            <NumberValue>{purchasedAmt} {symbol.toUpperCase()}</NumberValue>
          </LabelWithNumberContainer>
          <LabelWithNumberContainer>
            <Label>Avg. Buy Price</Label>
            <NumberValue>${fmt(purchasedPrice)}</NumberValue>
          </LabelWithNumberContainer>
          <LabelWithNumberContainer>
            <Label>Current Price</Label>
            <NumberValue>${fmt(cachedPrice)}</NumberValue>
          </LabelWithNumberContainer>
          <LabelWithNumberContainer>
            <Label>Current Value</Label>
            <NumberValue>${fmt(currentValue)}</NumberValue>
          </LabelWithNumberContainer>
          <LabelWithNumberContainer>
            <Label>P&amp;L</Label>
            <GainValue positive={isPositive}>
              {isPositive ? "+" : ""}${fmt(gain)}<br />
              <span style={{ fontSize: "12px" }}>{isPositive ? "+" : ""}{gainPct.toFixed(2)}%</span>
            </GainValue>
          </LabelWithNumberContainer>
          <LabelWithNumberContainer>
            <Label>Since</Label>
            <NumberValue>{datePurchased}</NumberValue>
          </LabelWithNumberContainer>
        </NumbersContainer>
      </PriceAndCoinContainer>
    </CoinPortfolioContainer>
  );
}
