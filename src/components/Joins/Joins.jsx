// 商家后台

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import styles from './Joins.less';

// 表单
import { Form, Input, Button, Checkbox, Steps, Row, Col } from 'antd';
const FormItem = Form.Item;
const Step = Steps.Step;

const Joins = () => {
  let handleSubmit = (e) => {
    console.dir(e);
    e.preventDefault();
  };

  const renderList = () => {
    return (
      <div className={styles.list}>

      <Row>
        <Steps current={0}>
          <Step title="报名要求" />
          <Step title="推广说明" />
          <Step title="填写表单" />
        </Steps>
      </Row>


      <Form horizontal >
        <FormItem id="control-input" label="宝贝链接" labelCol={{ span:6 }} wrapperCol={{ span: 14 }}>
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
      </Form>


      </div>
      );
  };

  return (
    <div className={styles.normal}>
    {renderList()}
    </div>
    );
};

Joins.propTypes = {};


export default Joins;
