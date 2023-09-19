import React, { Component } from "react";
import CoinModal from "../../components/CoinModal/CoinModal";
import {
  PortfolioContainer,
  Heading,
  AddButton,
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
} from "./Portfolio.styles";
export default class Portfolio extends Component {
  state = {
    isModalOpen: false,
    purchasedCoinList: [],
  };

  handleClose = () => {
    this.setState({ isModalOpen: false });
  };

  handleSave = (coinID, purchasedAmt, datePurchased) => {
    let purchasedCoin = {};
    purchasedCoin.coinID = "";
    purchasedCoin.purchasedAmt = 0;
    purchasedCoin.datePurchased = null;

    if (coinID !== "" && (purchasedAmt !== "" || purchasedAmt > 0) && datePurchased !== null) {
      purchasedCoin.coinID = coinID;
      purchasedCoin.purchasedAmt = purchasedAmt;
      purchasedCoin.datePurchased = datePurchased;
      this.setState({
        purchasedCoinList: [...this.state.purchasedCoinList, purchasedCoin],
      });
      this.setState({isModalOpen: false})
      console.log(this.state.purchasedCoinList);
    }
    else {
      console.log("Did not save");
    }
  };
  render() {
    return (
      <>
        {this.state.isModalOpen && (
          <CoinModal
            handleClose={this.handleClose}
            handleSave={this.handleSave}
          />
        )}
        <PortfolioContainer isModalOpen={this.state.isModalOpen}>
          <Heading>Portfolio Page is currently being developed</Heading>
          <AddButton onClick={() => this.setState({ isModalOpen: true })}>
            Add Asset
          </AddButton>
          <Heading>Your Statistics</Heading>
          <CoinPortfolioContainer>
            <CoinContainer>
              <IconContainer>
                <Icon src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" />
              </IconContainer>
              <CoinName>Bitcoin (BTC)</CoinName>
            </CoinContainer>
            <PriceAndCoinContainer>
              <LabelEditContainer>
                <Label>Market Price:</Label>
              </LabelEditContainer>
              <NumbersContainer>
                <LabelWithNumberContainer>
                  <Label>Current Price:</Label>
                  <Number>$39,504</Number>
                </LabelWithNumberContainer>
                <LabelWithNumberContainer>
                  <Label>Price Change 24h:</Label>
                  <Number>$39,504</Number>
                </LabelWithNumberContainer>
                <LabelWithNumberContainer>
                  <Label>Market Cap vs Volume:</Label>
                  <Number>44%</Number>
                  <FullBar>
                    <PartialBar width={44} />
                  </FullBar>
                </LabelWithNumberContainer>
                <LabelWithNumberContainer>
                  <Label>Circ Supply vs Max Supply:</Label>
                  <Number>$39,504</Number>
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
                  <Number>$39,504</Number>
                </LabelWithNumberContainer>
                <LabelWithNumberContainer>
                  <Label>Amount Value:</Label>
                  <Number>$39,504</Number>
                </LabelWithNumberContainer>
                <LabelWithNumberContainer>
                  <Label>Amount price change since purchase:</Label>
                  <Number>10.24%</Number>
                </LabelWithNumberContainer>
                <LabelWithNumberContainer>
                  <Label>Purchase Date:</Label>
                  <Number>06.25.23</Number>
                </LabelWithNumberContainer>
              </NumbersContainer>
            </PriceAndCoinContainer>
          </CoinPortfolioContainer>
        </PortfolioContainer>
      </>
    );
  }
}
