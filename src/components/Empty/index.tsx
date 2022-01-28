import React from 'react';
import { Empty } from 'antd';
import emptyImg from './empty.png';
import styles from './style.module.less';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface IProps {
  description?: string;
  image?: string;
  position?: 'absolute' | 'inherit';
}
const EmptyComp = (props: IProps) => {
  const { description, image, position = 'inherit' } = props;
  const img = image ? image : emptyImg;
  return (
    <Empty
      className={cx({ empty: true, emptyAbsolute: position === 'absolute' })}
      description={description}
      image={img}
    ></Empty>
  );
};

export default EmptyComp;
