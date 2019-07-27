import React from 'react';
import cn from 'classnames/bind';
import styles from './Item.scss';
import { Product } from './../types/index';

const cx = cn.bind(styles);

interface Props {
  product: Product;
  onClick: (e: React.MouseEvent<HTMLLIElement>) => void;
}

const Item = ({ product, onClick }: Props) => {
  return (
    <li className={cx('item')} onClick={onClick}>
      <span>
        <div className={cx('img-wrap')}>
          <img src={product.src} alt={product.name} />
        </div>
        <div className={cx('content')}>
          <div>
            <span className={cx('menu')}>{product.name}</span>
          </div>
          <div>
            <span className={cx('price')}>{product.price}원</span>
          </div>
        </div>
      </span>
    </li>
  );
};

export default Item;
