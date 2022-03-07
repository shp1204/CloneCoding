import React from 'react';
import classNames from 'classnames/bind';
import styles from './CSSModule.module.scss';

const CSSModule = () => {
  return (
    <div className={styles.wrapper}>
      안녕하세요, 저는 <span className="something">CSS Module!</span>
    </div>
  );
};

export default CSSModule;