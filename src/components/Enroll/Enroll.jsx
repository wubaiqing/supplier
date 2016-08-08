// 商家后台
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import styles from './Enroll.less';
import commons from '../Common/Common.less';
import { Link } from 'react-router'

// 表单
import { Row, Col } from 'antd';

export default class Enroll extends React.Component{
  render() {
    return (
      <div className={`ant-alert-error`}>
        <Row >
          <Col span={10}>
            <strong>报名要求:</strong>
            <p>1、店铺动态评分至少两项飘红</p>
            <p>2、C店要求3钻以上</p>
            <p>3、当前销量不低于30笔，评价不低于10个</p>
            <p>4、目前主要推广以下几个类目的宝贝：</p>
            <p>男女服装服饰、美食、居家用品、数码家电、母婴用品、户外运动。</p>
          </Col>

          <Col span={12} className={commons.m25}>
            <strong>推广说明:</strong>
            <p>1、不符合报名要求的、佣金不给力的商品一律不推</p>
            <p>2、佣金给力且符合要求的商品，我们会在创建清单和写帖子时选择符合主题的宝贝进行推广</p>
            <p>3、联系QQ 534095228，QQ群：183637828</p>
          </Col>
        </Row>
      </div>
    );
  }

};;
