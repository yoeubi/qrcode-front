import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import cn from 'classnames/bind';
import styles from './Header.scss';
import BasketContainer from '../containers/BasketContainer';

const cx = cn.bind(styles);
interface Props extends RouteComponentProps {}

const Header = ({ history, location }: Props) => {
  const onBack = () => {
    history.goBack();
  };
  const title = location.pathname === '/cart' ? '장바구니' : '주문하기';
  return (
    <header className={cx('header')}>
      <a onClick={onBack} className={cx('before')}>
        이전 페이지
      </a>
      <h1>{title}</h1>
      {location.pathname === '/cart' || <BasketContainer />}
    </header>
  );
};

export default withRouter(Header);
