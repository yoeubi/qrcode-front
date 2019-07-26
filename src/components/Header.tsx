import React, { useCallback } from 'react';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import cn from 'classnames/bind';
import styles from './Header.scss';
import { StoreState } from './../modules/index';
import { connect } from 'react-redux';

interface Props extends RouteComponentProps {
  count: number;
}

const cx = cn.bind(styles);

const Header: React.FunctionComponent<Props> = ({
  location,
  history,
  count,
}) => {
  const onClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      history.goBack();
    },
    [location],
  );
  const path = location.pathname === '/cart' ? '장바구니' : '주문하기';
  return (
    <header className={cx('header')}>
      <a onClick={onClick}>이전 페이지</a>
      <h1>{path}</h1>
      {location.pathname === '/cart' || (
        <Link to="/cart" className={cx('cart')}>
          장바구니
          {count > 0 && <span className={cx('count')}>{count}</span>}
        </Link>
      )}
    </header>
  );
};

function mapStateToProps(state: StoreState) {
  return {
    count: state.cart.carts.length,
  };
}

export default withRouter(connect(mapStateToProps)(Header));
