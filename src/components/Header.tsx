import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames/bind';
import styles from './Header.scss';

const cx = cn.bind(styles);

const Header: React.FunctionComponent<{}> = () => {
  return (
    <header className={cx('header')}>
      <Link to="/">이전 페이지</Link>
      <h1>주문하기</h1>
      <Link to="/" className={cx('cart')}>
        장바구니
      </Link>
    </header>
  );
};

export default Header;
