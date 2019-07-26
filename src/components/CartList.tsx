import React from 'react';
import CartItem from './CartItem';
import cn from 'classnames/bind';
import styles from './CartList.scss';
import { Link } from 'react-router-dom';

const cx = cn.bind(styles);

interface Props {
  onPay: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const CartList = ({ onPay }: Props) => {
  return (
    <div className={cx('cart-list')}>
      <div className={cx('info')}>
        <div className={cx('left')}>주문 진행 중</div>
        <div>
          총 상품 <span className={cx('green')}>2</span>개
        </div>
      </div>
      <ul>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </ul>
      <div className={cx('result')}>
        <h2 className={cx('total')}>
          총 주문금액 <span className={cx('price')}>39000원</span>
        </h2>
        <ul className={cx('detail')}>
          <li className={cx('list')}>
            <span className={cx('quantity')}>상품금액 (2개)</span>
            <span className={cx('price')}>37000원</span>
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
