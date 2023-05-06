import React, { Component } from 'react'
import styled from 'styled-components';
import ChartsOverview from '../../components/ChartsOverview/ChartsOverview';

const LandingContainer = styled.div`
    margin: 25px 100px;
`;
export default class Landing extends Component {
  render() {
    return (
      <LandingContainer>
        <ChartsOverview/>
      </LandingContainer>
    )
  }
}
