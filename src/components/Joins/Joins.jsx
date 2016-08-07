// 商家后台

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import commons from '../Common/Common.less';
import styles from './Joins.less';
import { Link } from 'react-router'



// 表单
import { Form, Input, Button, Checkbox, Steps, Row, Col } from 'antd';
const FormItem = Form.Item;


let Joins = React.createClass({
  // 提交
  handleSubmit(e) {
    e.preventDefault();
  },

  // 渲染试图
  render() {
    return (
        <Row className={commons.explain}>
          <Col>
          <Form horizontal form={this.props.form}>
            <FormItem id="control-input" label="宝贝链接" labelCol={{ span:6 }} wrapperCol={{ span: 14 }} validateStatus="error">
              <Input id="control-input" placeholder="" />
            </FormItem>
            <FormItem id="control-input" label="最高佣金比例" labelCol={{ span:6 }} wrapperCol={{ span: 14 }}>
              <Input id="control-input" placeholder="不是最高佣金比例，不予推广" />
            </FormItem>
            <FormItem id="control-input" label="高佣金计划申请地址" labelCol={{ span:6 }} wrapperCol={{ span: 14 }}>
              <Input id="control-input" placeholder="" />
            </FormItem>
            <FormItem id="control-input" label="佣金计划审核联系人QQ" labelCol={{ span:6 }} wrapperCol={{ span: 14 }}>
              <Input id="control-input" placeholder="三项联系信息必须全填，避免长时间不审核计划，还联系不到人" />
            </FormItem>
            <FormItem id="control-input" label="联系电话" labelCol={{ span:6 }} wrapperCol={{ span: 14 }}>
              <Input id="control-input" placeholder="" />
            </FormItem>
            <FormItem id="control-input" label="联系微信" labelCol={{ span:6 }} wrapperCol={{ span: 14 }}>
              <Input id="control-input" placeholder="" />
            </FormItem>
            <FormItem wrapperCol={{ span: 16, offset: 6 }} style={{ marginTop: 24 }}>
              <Button type="primary" onClick={this.handleSubmit}>提交</Button>
            </FormItem>
          </Form>
          </Col>
        </Row>
      );

  }


});


export default Joins;
