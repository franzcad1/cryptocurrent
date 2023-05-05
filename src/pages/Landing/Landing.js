import React, { Component } from 'react'
import styled from 'styled-components';
import ChartOverview from '../../components/ChartOverview/ChartOverview';

const LandingContainer = styled.div`
    margin: 25px 100px;
`;
export default class Landing extends Component {
  render() {
    return (
      <LandingContainer>
        <ChartOverview/>
      </LandingContainer>
    )
  }
}
