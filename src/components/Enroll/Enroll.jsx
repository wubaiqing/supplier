// 商家后台
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import styles from './Enroll.less';
import commons from '../Common/Common.less';
import { Link } from 'react-router'

// 表单
import { Row, Col, Alert } from 'antd';

export default class Enroll extends React.Component{
  render() {
    return (
      <div>
        <div className={commons.enroll}>
          <Row>
            <Col offset={1} span={10}>
              <p>报名要求:</p>
              <p>1、店铺动态评分至少两项飘红</p>
              <p>2、C店要求3钻以上</p>
              <p>3、当前销量不低于30笔，评价不低于10个</p>
              <p>4、目前主要推广以下几个类目的宝贝：</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;男女服装服饰、美食、居家用品、数码家电、母婴用品、户外运动。</p>
            </Col>

            <Col span={12} offset={1}>
              <p>推广说明:</p>
              <p>1、不符合要求的商品，佣金比例不是历史最高的，一律不推，请勿报名</p>
              <p>2、佣金给力且符合要求的商品，我们会在创建清单和写帖子时选择符合</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;主题的宝贝进行推广</p>
              <p>3、联系QQ：534095228（想走阿里v任务的，私聊）</p>
              <p>4、QQ群：183637828</p>
            </Col>
          </Row>
        </div>
        <div>
            <Row>
              <Col className={commons.bold}>
                <Alert type="warning"  showIcon message="【重要】高佣金比例，不管是通用的，定向的，还是隐藏的，都必须是历史最高佣金比例"></Alert>
              </Col>
            </Row>
        </div>
      </div>


    );
  }
};;
