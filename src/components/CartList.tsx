import React from 'react';
import CartItem from './CartItem';
import cn from 'classnames/bind';
import styles from './CartList.scss';
import { Link } from 'react-router-dom';
import { Cart } from './../types/index';

const cx = cn.bind(styles);

interface Props {
  onPay: () => void;
  onMod: (payload: Cart, sing: 'plus' | 'minus') => void;
  onRemove: (payload: string) => void;
  carts: Cart[];
}

const CartList = ({ onPay, carts, onMod, onRemove }: Props) => {
  const total = carts.reduce((prev, current) => {
    return prev + current.product.price * current.quantity;
  }, 0);
  return (
    <div className={cx('cart-list')}>
      <div className={cx('info')}>
        <div className={cx('left')}>주문 진행 중</div>
        <div>
          총 상품 <span className={cx('green')}>{carts.length}</span>개
        </div>
      </div>
      <ul>
        {carts.map(c => (
          <CartItem
            key={c.product.name}
            cart={c}
            onMod={onMod}
            onRemove={onRemove}
          />
        ))}
      </ul>
      <div className={cx('result')}>
        <h2 className={cx('total')}>
          총 주문금액 <span className={cx('price')}>{total}원</span>
        </h2>
        <ul className={cx('detail')}>
          <li className={cx('list')}>
            <span className={cx('quantity')}>상품금액 ({carts.length}개)</span>
            <span className={cx('price')}>{total}원</span>
          </li>
        </ul>
      </div>
      <Link to="/" className={cx('continue')}>
        메뉴 추가
      </Link>
      <button className={cx('pay')} onClick={onPay}>
        결제하기
      </button>
    </div>
  );
};

export default CartList;
