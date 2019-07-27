import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames/bind';
import styles from './Basket.scss';

const cx = cn.bind(styles);

interface Props {
  count: number;
}

const Basket = ({ count }: Props) => {
  return (
    <Link to="/cart" className={cx('cart')}>
      장바구니
      {count > 0 && <span className={cx('count')}>{count}</span>}
    </Link>
  );
};

export default Basket;
