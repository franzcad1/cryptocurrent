import React, { Component } from "react";
import { connect } from "react-redux";
import ChartsOverview from "../../components/ChartsOverview/ChartsOverview";
import TableOverview from "../../components/TableOverview/TableOverview";
import { HomeContainer, ErrorContainer, Error, ErrorIcon } from "./Home.styles";

class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <ChartsOverview />
        <TableOverview coinList={this.props.coinList} />

        {this.props.coinList.hasError && (
          <ErrorContainer>
            <Error>
              <ErrorIcon/> You are being rate limited by CoinGecko API, please refresh in 1 minute.
            </Error>
          </ErrorContainer>
        )}
      </HomeContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  coinList: state.coinList,
});

export default connect(mapStateToProps)(Home);
