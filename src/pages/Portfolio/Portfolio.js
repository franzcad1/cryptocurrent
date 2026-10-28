import React, { Component } from "react";
import { connect } from "react-redux";
import CoinModal from "../../components/CoinModal/CoinModal";
import PurchasedCoin from "../../components/PurchasedCoin/PurchasedCoin";
import { addHolding, deleteHolding } from "../../store/portfolio/portfolioActions";
import {
  PortfolioContainer,
  Heading,
  AddButton,
  CenteredText,
  SummaryRow,
  SummaryCard,
  SummaryLabel,
  SummaryValue,
  SummaryGain,
} from "./Portfolio.styles";

class Portfolio extends Component {
  state = { isModalOpen: false };

  handleClose = () => this.setState({ isModalOpen: false });

  handleSave = (snapshot) => {
    this.props.dispatch(addHolding(snapshot));
    this.setState({ isModalOpen: false });
  };

  handleDelete = (coinID) => {
    this.props.dispatch(deleteHolding(coinID));
  };

  render() {
    const { holdings } = this.props;

    const totalValue = holdings.reduce((sum, h) => sum + h.cachedPrice * h.purchasedAmt, 0);
    const totalInvested = holdings.reduce((sum, h) => sum + h.purchasedPrice * h.purchasedAmt, 0);
    const totalGain = totalValue - totalInvested;
    const totalGainPct = totalInvested > 0 ? (totalGain / totalInvested) * 100 : 0;
    const isPositive = totalGain >= 0;

    return (
      <>
        {this.state.isModalOpen && (
          <CoinModal handleClose={this.handleClose} handleSave={this.handleSave} />
        )}
        <PortfolioContainer isModalOpen={this.state.isModalOpen}>
          <Heading>Your Portfolio</Heading>

          {holdings.length > 0 && (
            <SummaryRow>
              <SummaryCard>
                <SummaryLabel>Total Value</SummaryLabel>
                <SummaryValue>${totalValue.toLocaleString("en-CA", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</SummaryValue>
              </SummaryCard>
              <SummaryCard>
                <SummaryLabel>Total Invested</SummaryLabel>
                <SummaryValue>${totalInvested.toLocaleString("en-CA", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</SummaryValue>
              </SummaryCard>
              <SummaryCard>
                <SummaryLabel>Total P&L</SummaryLabel>
                <SummaryGain positive={isPositive}>
                  {isPositive ? "+" : ""}${totalGain.toLocaleString("en-CA", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ({isPositive ? "+" : ""}{totalGainPct.toFixed(2)}%)
                </SummaryGain>
              </SummaryCard>
            </SummaryRow>
          )}

          <AddButton onClick={() => this.setState({ isModalOpen: true })}>
            + Add Asset
          </AddButton>

          {holdings.length > 0 ? (
            holdings.map((holding) => (
              <PurchasedCoin
                key={holding.coinID}
                holding={holding}
                handleDelete={this.handleDelete}
              />
            ))
          ) : (
            <CenteredText>Add an asset to start tracking your portfolio</CenteredText>
          )}
        </PortfolioContainer>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  holdings: state.portfolio.holdings,
});

export default connect(mapStateToProps)(Portfolio);
