import React from 'react';
import styles from './CartItem.scss';
import cn from 'classnames/bind';

const cx = cn.bind(styles);

const CartItem = () => {
  return (
    <li className={cx('cart-item')}>
      <div className={cx('info')}>
        <div className={cx('img-wrap')}>
          <img
            src="http://image.istarbucks.co.kr/upload/store/skuimg/2018/04/[9200000001272]_20180409150901440.jpg"
            alt="123"
          />
        </div>
        <div className={cx('content')}>
          <a href="/" className={cx('name')}>
            교촌허니콤보
          </a>
          <a href="/" className={cx('close')}>
            메뉴 삭제
          </a>
        </div>
      </div>
      <div className={cx('panel')}>
        <div className={cx('control')}>
          <button className={cx('minus')}>감소</button>
          <span className={cx('quantity')}>1</span>
          <button className={cx('plus')}>증가</button>
        </div>
        <span className={cx('price')}>18000원</span>
      </div>
    </li>
  );
};

export default CartItem;
