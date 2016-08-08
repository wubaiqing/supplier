import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
import styles from './MainLayout.less';
import { Alert } from 'antd';

const MainLayout = ({ children }) => {
  return (
    <div className={styles.normal}>
      <div className={styles.head}>
      <h1><a href="/">淘客大牛商家平台</a></h1>
      </div>
      <div className={styles.mainWrapper}>
        <div className={styles.main}>
          {children}
        </div>
      </div>
      <div className={styles.foot}>
      联系QQ：534095228 &nbsp;&nbsp; QQ群：183637828
      </div>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainLayout;
