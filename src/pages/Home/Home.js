import React, { Component } from 'react'
import { connect } from 'react-redux';
import ChartsOverview from '../../components/ChartsOverview/ChartsOverview';
import TableOverview from '../../components/TableOverview/TableOverview';
import { HomeContainer } from './Home.styles';

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
