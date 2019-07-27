import React from 'react';
import Item from './Item';
import cn from 'classnames/bind';
import styles from './List.scss';
import { Product, Cart } from './../types/index';
import SelectContainer from './../containers/SelectContainer';

const cx = cn.bind(styles);

interface Props {
  products: Product[];
  selectedProduct: Product | null;
  onModal: (product: Product) => void;
  onClose: () => void;
  onSubmit: (cart: Cart) => void;
}

const List = ({
  products,
  onModal,
  onClose,
  selectedProduct,
  onSubmit,
}: Props) => {
  return (
    <>
      <ul className={cx('list')}>
        {products.map(p => (
          <Item key={p.name} product={p} onClick={() => onModal(p)} />
        ))}
      </ul>
      {selectedProduct && (
        <SelectContainer
          product={selectedProduct}
          onClose={onClose}
          onSubmit={onSubmit}
        />
      )}
    </>
  );
};

export default List;
