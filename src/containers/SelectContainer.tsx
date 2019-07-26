import React, { Component } from 'react';
import Select from '../components/Select';
import { Product } from '../types';
import SelectBackground from '../components/SelectBackground';
import { connect } from 'react-redux';
import { addCart } from '../modules/cart';
import { Dispatch } from 'redux';
import { Cart } from './../types/index';

interface Props {
  product: Product;
  onClose: () => void;
  addCart: (payload: Cart) => void;
}

interface State {
  quantity: number;
  isSubmit: boolean;
}
class SelectContainer extends Component<Props, State> {
  state = {
    quantity: 1,
    isSubmit: false,
  };
  onIncrease = () => {
    this.setState(prev => ({ quantity: prev.quantity + 1 }));
  };
  onDecrease = () => {
    const { quantity } = this.state;
    const minmumQuantity = 1;
    if (quantity - 1 < minmumQuantity) {
      return;
    }
    this.setState(prev => ({ quantity: prev.quantity - 1 }));
  };
  submit: (cart: Cart) => () => void = cart => () => {
    const { onClose, addCart } = this.props;
    onClose();
    addCart(cart);
  };
  render() {
    const { product, onClose } = this.props;
    const { quantity } = this.state;
    return (
      <>
        <SelectBackground onClose={onClose} />
        <Select
          product={product}
          onIncrease={this.onIncrease}
          onDecrease={this.onDecrease}
          quantity={quantity}
          onClose={onClose}
          addCart={this.submit({ product, quantity })}
        />
      </>
    );
  }
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    addCart: (payload: Cart) => dispatch(addCart(payload)),
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(SelectContainer);
