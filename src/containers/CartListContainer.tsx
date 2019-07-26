import React, { Component } from 'react';
import CartList from '../components/CartList';

class CartListContainer extends Component {
  onPay = () => {
    alert('결과 완료');
  };
  render() {
    return <CartList onPay={this.onPay} />;
  }
}

export default CartListContainer;
