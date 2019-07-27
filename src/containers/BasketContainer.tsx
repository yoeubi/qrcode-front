import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StoreState } from '../modules';
import Basket from '../components/Basket';

interface Props {
  count: number;
}

class BasketContainer extends Component<Props> {
  render() {
    const { count } = this.props;
    return <Basket count={count} />;
  }
}

function mapStateToProps(state: StoreState) {
  return {
    count: state.cart.carts.length,
  };
}

export default connect(mapStateToProps)(BasketContainer);
