import React, { Component } from "react";
import CoinModal from "../../components/CoinModal/CoinModal";
import PurchasedCoin from "../../components/PurchasedCoin/PurchasedCoin";
import {
  PortfolioContainer,
  Heading,
  AddButton,
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
          {this.state.purchasedCoinList.length > 0 ? <> {this.state.purchasedCoinList.map((purchasedCoin) => (<PurchasedCoin purchasedCoin={purchasedCoin}/>) )} </> : <p>No Coins on Portfolio</p>  }
        </PortfolioContainer>
      </>
    );
  }
}
