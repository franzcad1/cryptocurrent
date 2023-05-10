import React, { Component } from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';
import ChartsOverview from '../../components/ChartsOverview/ChartsOverview';
import TableOverview from '../../components/TableOverview/TableOverview';

const HomeContainer = styled.div`
    margin: 25px 100px;
`;
class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <ChartsOverview/>
        <TableOverview coinList={this.props.coinList}/>
      </HomeContainer>
    )
  }
}

const mapStateToProps = (state) => ({
  coinList: state.coinList,
});

export default connect(mapStateToProps)(Home);
