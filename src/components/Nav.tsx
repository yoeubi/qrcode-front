import React from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames/bind';
import styles from './Nav.scss';

const cx = cn.bind(styles);

const Nav = () => {
  return (
    <div className={cx('nav')}>
      <NavLink to="/" exact={true} activeClassName={cx('active')}>
        전체
      </NavLink>
      <NavLink to="/a" exact={true} activeClassName={cx('active')}>
        에스프레소
      </NavLink>
      <NavLink to="/b" exact={true} activeClassName={cx('active')}>
        블렌디드
      </NavLink>
      <NavLink to="/c" exact={true} activeClassName={cx('active')}>
        티
      </NavLink>
      <NavLink to="/d" exact={true} activeClassName={cx('active')}>
        기타
      </NavLink>
    </div>
  );
};

export default Nav;
