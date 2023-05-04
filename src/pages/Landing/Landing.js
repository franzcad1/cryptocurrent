import React, { Component } from 'react'
import BitcoinChart from '../../components/BitcoinChart/BitcoinChart'
import styled from 'styled-components';

const LandingContainer = styled.div`
    margin: 25px 100px;
`;
export default class Landing extends Component {
  render() {
    return (
      <LandingContainer>
        <BitcoinChart/>
      </LandingContainer>
    )
  }
}
