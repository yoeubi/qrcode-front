import React from 'react';
import cn from 'classnames/bind';
import styles from './Select.scss';
import { Product } from './../types/index';

const cx = cn.bind(styles);

interface Props {
  product: Product;
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

const Select = ({ product, onDecrease, onIncrease, quantity }: Props) => {
  return (
    <div className={cx('select-wrap')}>
      <div className={cx('select')}>
        <div className={cx('info')}>
          <div className={cx('content')}>
            <span className={cx('name')}>{product.name}</span>
            <span className={cx('close')}>메뉴 삭제</span>
          </div>
        </div>
        <div className={cx('panel')}>
          <div className={cx('control')}>
            <button className={cx('minus')} onClick={onDecrease}>
              감소
            </button>
            <span className={cx('quantity')}>{quantity}</span>
            <button className={cx('plus')} onClick={onIncrease}>
              증가
            </button>
          </div>
          <span className={cx('price')}>{quantity * product.price}원</span>
        </div>
        <div className={cx('confirm-wrap')}>
          <button className={cx('confirm')}>장바구니</button>
        </div>
      </div>
    </div>
  );
};

export default Select;
