import React, { Component } from "react";
import CoinModal from "../../components/CoinModal/CoinModal";
import PurchasedCoin from "../../components/PurchasedCoin/PurchasedCoin";
import {
  PortfolioContainer,
  Heading,
  AddButton,
  CenteredText,
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

  handleDelete = (coinID) => {
    const purchasedList = this.state.purchasedCoinList.filter(coin => {return coin.coinID !== coinID});
    this.setState({purchasedCoinList: purchasedList})
    console.log('deleted');
    console.log(purchasedList);
  }

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
          <CenteredText>Portfolio Page is currently being developed</CenteredText>
          <AddButton onClick={() => this.setState({ isModalOpen: true })}>
            Add Asset
          </AddButton>
          <Heading>Your Statistics</Heading>
          {this.state.purchasedCoinList.length > 0 ? <> {this.state.purchasedCoinList.map((purchasedCoin) => (<PurchasedCoin purchasedCoin={purchasedCoin} handleDelete={this.handleDelete}/>) )} </> : <CenteredText>Add an Asset to view Statistics</CenteredText>  }
        </PortfolioContainer>
      </>
    );
  }
}
