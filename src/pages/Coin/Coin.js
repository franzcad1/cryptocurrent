import React, { Component } from "react";
import styled from "styled-components";
import CoinSummary from "../../components/CoinSummary/CoinSummary";

const CoinPageContainer = styled.div`
  margin: 25px auto;
  max-width: 1200px;
`;

const Heading = styled.p`
  font-size: 22px;
  font-weight: 500;
  font-style: normal;
  color: #ffffff;
  margin-top: 70px;
`;



class Coin extends Component {
  render() {
    return (
      <CoinPageContainer>
        <Heading>Your summary</Heading>
        <CoinSummary/>
        <Heading>Description</Heading>
      </CoinPageContainer>
    );
  }
}

export default Coin;
