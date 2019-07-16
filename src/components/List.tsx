import React, { Component } from 'react';
import Item from './Item';
import cn from 'classnames/bind';
import styles from './List.scss';

const cx = cn.bind(styles);

class List extends Component {
  render() {
    return (
      <ul className={cx('list')}>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </ul>
    );
  }
}

export default List;
