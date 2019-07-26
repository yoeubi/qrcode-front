import React from 'react';
import cn from 'classnames/bind';
import styles from './SelectBackground.scss';

const cx = cn.bind(styles);

interface Props {
  onClose: () => void;
}

const SelectBackground = ({ onClose }: Props) => {
  return <div className={cx('select-background', 'show')} onClick={onClose} />;
};

export default SelectBackground;
