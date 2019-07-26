import React from 'react';
import cn from 'classnames/bind';
import styles from './Add.scss';

const cx = cn.bind(styles);

const Add = () => {
  return <span className={cx('add')}>장바구니가 추가 되었습니다.</span>;
};

export default Add;
