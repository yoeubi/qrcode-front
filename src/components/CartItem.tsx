import React from 'react';
import styles from './CartItem.scss';
import cn from 'classnames/bind';
import { Cart } from './../types/index';

const cx = cn.bind(styles);

interface Props {
  cart: Cart;
  onMod: (payload: Cart, sign: 'plus' | 'minus') => void;
  onRemove: (payload: string) => void;
}

const CartItem = ({ cart, onMod, onRemove }: Props) => {
  return (
    <li className={cx('cart-item')}>
      <div className={cx('info')}>
        <div className={cx('img-wrap')}>
          <img src={cart.product.src} alt={cart.product.name} />
        </div>
        <div className={cx('content')}>
          <span className={cx('name')}>{cart.product.name}</span>
          <span
            className={cx('close')}
            onClick={() => onRemove(cart.product.name)}
          >
            메뉴 삭제
          </span>
        </div>
      </div>
      <div className={cx('panel')}>
        <div className={cx('control')}>
          <button className={cx('minus')} onClick={() => onMod(cart, 'minus')}>
            감소
          </button>
          <span className={cx('quantity')}>{cart.quantity}</span>
          <button className={cx('plus')} onClick={() => onMod(cart, 'plus')}>
            증가
          </button>
        </div>
        <span className={cx('price')}>
          {cart.product.price * cart.quantity}원
        </span>
      </div>
    </li>
  );
};

export default CartItem;
