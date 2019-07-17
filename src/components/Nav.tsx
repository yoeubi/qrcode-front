import React from 'react';
import { NavLink, match } from 'react-router-dom';
import cn from 'classnames/bind';
import styles from './Nav.scss';
import { Location } from 'history';

const cx = cn.bind(styles);

function isExact(product: String | null) {
  return function isActive(_: match<{}>, location: Location) {
    const query = new URLSearchParams(location.search);
    return query.get('product') === product;
  };
}

const product = ['전체', '에스프레소', '블렌디드', '티', '기타'];

const Nav = () => {
  return (
    <div className={cx('nav')}>
      {product.map(p => (
        <NavLink
          key={p}
          to={`/?product=${p}`}
          isActive={isExact(p)}
          activeClassName={cx('active')}
        >
          {p}
        </NavLink>
      ))}
    </div>
  );
};

export default Nav;
