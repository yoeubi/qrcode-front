import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames/bind';
import styles from './Item.scss';

const cx = cn.bind(styles);

const Item = () => {
  return (
    <li className={cx('item')}>
      <Link to="/">
        <div className={cx('img-wrap')}>
          <img
            src="http://image.istarbucks.co.kr/upload/store/skuimg/2018/04/[9200000001272]_20180409150901440.jpg"
            alt="나이트로 쇼콜라"
          />
        </div>
        <div className={cx('content')}>
          <div>
            <span className={cx('menu')}>나이트로 쇼콜라</span>
          </div>
          <div>
            <span className={cx('price')}>5000원</span>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default Item;
