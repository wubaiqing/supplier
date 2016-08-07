// 商家后台

import React, { Component,propTypes } from 'react';
import { connect } from 'react-redux';
import $ from "jquery";

import commons from '../Common/Common.less';
import styles from './Joins.less';

// 表单
import { Form, Input, Button, Checkbox, Steps, Row, Col, Spin, message } from 'antd';
const FormItem = Form.Item;
const CreateForm = Form.create;


let Joins = React.createClass({
  getInitialState() {
    return { loading: false };
  },
  toggle(value) {
    this.setState({ loading: value });
  },
  // 重置
  handleReset(e) {
    e.preventDefault();
    this.props.form.resetFields();
  },

  // 提交
  handleSubmit(e) {
    e.preventDefault();
    let input = this;
    this.props.form.validateFields((errors, values) => {
      if (!!errors) {
        return;
      }
      input.state.loading = true;
      $.getJSON('http://www.taokedaniu.com/api/supplier', {...this.props.form.getFieldsValue()}, (data) => {
        if (data.status) {
          input.state.loading = false;
          message.success('添加成功');
          input.props.form.resetFields();
        } else {
          message.error('创建失败，请联系QQ反馈');
          input.state.loading = false;
        }
      });
    });
  },

  // 渲染试图
  render() {
    const { getFieldProps, getFieldError, isFieldValidating } = this.props.form;

    const formItemLayout = {
     labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };

    const taobaoUrlProps = getFieldProps('taobao_url', {
      initialValue: '',
      rules: [
        { required: true, min: 5, message: '宝贝链接错误，请输入宝贝链接' },
      ],
    });

    const maxCommissionRate = getFieldProps('max_commission_rate', {
      initialValue: '',
      rules: [
        { required: true, message: '请填写最高佣金比例，值为整数。' },
      ],
    });

    const maxCommissionUrl = getFieldProps('max_commission_url', {
      initialValue: '',
      rules: [
        { required: true, message: '高佣金计划申请地址错误，请输入高佣金申请地址' },
      ],
    });

    const QQ = getFieldProps('qq', {
      initialValue: '',
      rules: [
        { required: true, message: '请填写QQ' },
      ],
    });


    const telePhone = getFieldProps('telephone', {
      initialValue: '',
      rules: [
        { required: true, message: '请填写联系电话' },
      ],
    });

    const wechat = getFieldProps('wechat', {
      initialValue: '',
      rules: [
        { required: true, message: '请填写微信' },
      ],
    });

    return (

        <Spin spinning={this.state.loading}>
          <Row className={commons.explain}>
            <Col>
            <Form horizontal form={this.props.form}>
              <FormItem label="宝贝链接" {...formItemLayout}>
                <Input {...taobaoUrlProps} placeholder="" />
              </FormItem>
              <FormItem label="最高佣金比例" {...formItemLayout}>
                <Input {...maxCommissionRate}  placeholder="不是最高佣金比例，不予推广" />
              </FormItem>
              <FormItem label="高佣金计划申请地址" {...formItemLayout}>
                <Input {...maxCommissionUrl} placeholder="" />
              </FormItem>
              <FormItem label="佣金计划审核联系人QQ" {...formItemLayout}>
                <Input {...QQ} placeholder="三项联系信息必须全填，避免长时间不审核计划，还联系不到人" />
              </FormItem>
              <FormItem label="联系电话" {...formItemLayout}>
                <Input {...telePhone} placeholder="" />
              </FormItem>
              <FormItem label="联系微信" {...formItemLayout}>
                <Input {...wechat} placeholder="" />
              </FormItem>
              <FormItem wrapperCol={{ span: 16, offset: 6 }} style={{ marginTop: 24 }}>
                <Button type="primary" onClick={this.handleSubmit}>提交</Button>
                &nbsp;&nbsp;&nbsp;
                <Button type="ghost" onClick={this.handleReset}>重置</Button>
              </FormItem>
            </Form>
            </Col>
          </Row>
        </Spin>
      );
  }
});
Joins = CreateForm()(Joins);


export default Joins;
