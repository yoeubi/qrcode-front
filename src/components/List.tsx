import React, { Component } from 'react';
import Item from './Item';
import cn from 'classnames/bind';
import styles from './List.scss';
import { Product } from './../types/index';
import Modal from './Modal';
import SelectBackground from './SelectBackground';
import Select from './Select';
import SelectContainer from './../containers/SelectContainer';

const cx = cn.bind(styles);

interface Props {
  products: Product[];
}

interface State {
  isActive: boolean;
  selectedProduct: Product | null;
}

class List extends Component<Props, State> {
  state = {
    isActive: false,
    selectedProduct: null,
  };
  onModal(product: Product) {
    this.setState(prev => ({
      isActive: !prev.isActive,
      selectedProduct: product,
    }));
  }
  render() {
    const { products } = this.props;
    const { isActive, selectedProduct } = this.state;
    return (
      <>
        <ul className={cx('list')}>
          {products.map(p => (
            <Item key={p.name} product={p} onClick={() => this.onModal(p)} />
          ))}
        </ul>
        {isActive && (
          <Modal>
            <>
              <SelectBackground />
              {selectedProduct && <SelectContainer product={selectedProduct} />}
            </>
          </Modal>
        )}
      </>
    );
  }
}

export default List;
