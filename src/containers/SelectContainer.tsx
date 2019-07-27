import React, { Component } from 'react';
import Select from '../components/Select';
import { Product } from '../types';
import SelectBackground from '../components/SelectBackground';
import { Cart } from './../types/index';

interface Props {
  product: Product;
  onClose: () => void;
  onSubmit: (cart: Cart) => void;
}

interface State {
  quantity: number;
}
class SelectContainer extends Component<Props, State> {
  state = {
    quantity: 1,
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
  onConfirm = () => {
    const { product, onClose, onSubmit } = this.props;
    const { quantity } = this.state;
    onSubmit({ product, quantity });
    onClose();
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
          addCart={this.onConfirm}
        />
      </>
    );
  }
}
export default SelectContainer;
