import React, { Component } from "react";
import { connect } from "react-redux";
import ChartsOverview from "../../components/ChartsOverview/ChartsOverview";
import TableOverview from "../../components/TableOverview/TableOverview";
import {
  HomeContainer,
  ModalOverlay,
  ModalBox,
  ModalTitle,
  ModalText,
  ModalClose,
  ErrorIcon,
} from "./Home.styles";

class Home extends Component {
  state = { dismissedAt: 0 };

  render() {
    const showModal = this.props.errorCount > this.state.dismissedAt;
    return (
      <HomeContainer>
        <ChartsOverview />
        <TableOverview coinList={this.props.coinList} />

        {showModal && (
          <ModalOverlay>
            <ModalBox>
              <ErrorIcon />
              <ModalTitle>Rate Limited</ModalTitle>
              <ModalText>
                This is a demo using CoinGecko's free API, which limits the number of requests per minute. Some data may not load. Please wait a moment and try again.
              </ModalText>
              <ModalClose onClick={() => this.setState({ dismissedAt: this.props.errorCount })}>
                Got it
              </ModalClose>
            </ModalBox>
          </ModalOverlay>
        )}
      </HomeContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  coinList: state.coinList,
  errorCount: state.errorCount,
});

export default connect(mapStateToProps)(Home);
