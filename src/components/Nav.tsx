import React from 'react';
import { NavLink, match } from 'react-router-dom';
import cn from 'classnames/bind';
import styles from './Nav.scss';
import { Location } from 'history';

interface Props {
  category: string[] | null;
}

const cx = cn.bind(styles);

function isExact(category: String | null) {
  return function isActive(_: match<{}>, location: Location) {
    const query = new URLSearchParams(location.search);
    return query.get('category') === category;
  };
}

const Nav = ({ category }: Props) => {
  return (
    <div className={cx('nav')}>
      <ul>
        <li>
          <NavLink
            to="/"
            isActive={isExact(null)}
            activeClassName={cx('active')}
          >
            전체
          </NavLink>
        </li>
        {category &&
          category.map(p => (
            <li key={p}>
              <NavLink
                key={p}
                to={`/?category=${p}`}
                isActive={isExact(p)}
                activeClassName={cx('active')}
              >
                {p}
              </NavLink>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Nav;
