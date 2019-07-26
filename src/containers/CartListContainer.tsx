import React, { Component } from 'react';
import CartList from '../components/CartList';
import { StoreState } from './../modules/index';
import { connect } from 'react-redux';
import { Cart } from './../types/index';
import { modCart, removeCart, clearCart } from '../modules/cart';
import { Dispatch } from 'redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { produce } from 'immer';

interface Props extends RouteComponentProps {
  carts: Cart[];
  modCart: (paylad: Cart) => void;
  removeCart: (payload: string) => void;
  clearCart: () => void;
}

class CartListContainer extends Component<Props> {
  onPay = () => {
    alert('결과 완료');
    const { clearCart, history } = this.props;
    clearCart();
    history.replace('/');
  };
  onMod = (payload: Cart, sign: 'plus' | 'minus') => {
    const { modCart } = this.props;
    if (sign === 'minus' && payload.quantity - 1 < 1) {
      return;
    }
    let newPayload = produce(payload, draft => {
      if (sign === 'plus') {
        draft.quantity += 1;
      } else {
        draft.quantity -= 1;
      }
    });
    modCart(newPayload);
  };
  onRemove = (payload: string) => {
    const { removeCart } = this.props;
    removeCart(payload);
  };
  render() {
    const { carts } = this.props;
    return (
      <CartList
        onPay={this.onPay}
        carts={carts}
        onMod={this.onMod}
        onRemove={this.onRemove}
      />
    );
  }
}

function mapStateToProps(state: StoreState) {
  return {
    carts: state.cart.carts,
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    modCart: (payload: Cart) => dispatch(modCart(payload)),
    removeCart: (payload: string) => dispatch(removeCart(payload)),
    clearCart: () => dispatch(clearCart()),
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(CartListContainer),
);
