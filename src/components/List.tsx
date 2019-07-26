import React, { Component } from 'react';
import Item from './Item';
import cn from 'classnames/bind';
import styles from './List.scss';
import { Product } from './../types/index';
import SelectContainer from './../containers/SelectContainer';
import Modal from './Modal';
import Add from './Add';

const cx = cn.bind(styles);

interface Props {
  products: Product[];
}

interface State {
  selectedProduct: Product | null;
  isActive: boolean;
}

class List extends Component<Props, State> {
  id: number = 0;
  state = {
    selectedProduct: null,
    isActive: false,
  };
  onModal(product: Product) {
    this.setState(() => ({
      selectedProduct: product,
    }));
    document.body.style.overflow = 'hidden';
  }
  onClose = () => {
    this.setState(() => ({ isActive: true, selectedProduct: null }));
    document.body.style.overflow = 'auto';
    if (this.id) {
      clearTimeout(this.id);
    }
    this.id = setTimeout(() => {
      this.setState(() => ({ isActive: false }));
    }, 2000);
  };
  render() {
    const { products } = this.props;
    const { selectedProduct, isActive } = this.state;
    return (
      <>
        <ul className={cx('list')}>
          {products.map(p => (
            <Item key={p.name} product={p} onClick={() => this.onModal(p)} />
          ))}
        </ul>
        {selectedProduct && (
          <SelectContainer product={selectedProduct!} onClose={this.onClose} />
        )}
        {isActive && (
          <Modal>
            <Add />
          </Modal>
        )}
      </>
    );
  }
}

export default List;
