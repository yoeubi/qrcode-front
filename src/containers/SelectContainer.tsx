import React, { Component } from 'react';
import Select from '../components/Select';
import { Product } from '../types';

interface Props {
  product: Product;
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
  render() {
    const { product } = this.props;
    const { quantity } = this.state;
    return (
      <Select
        product={product}
        onIncrease={this.onIncrease}
        onDecrease={this.onDecrease}
        quantity={quantity}
      />
    );
  }
}

export default SelectContainer;
