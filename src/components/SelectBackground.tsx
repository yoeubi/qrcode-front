import React from 'react';
import cn from 'classnames/bind';
import styles from './SelectBackground.scss';

const cx = cn.bind(styles);

const SelectBackground = () => {
  return <div className={cx('select-background')}></div>;
};

export default SelectBackground;
