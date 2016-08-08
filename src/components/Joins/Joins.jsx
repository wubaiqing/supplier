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
      labelCol: { span: 5 },
      wrapperCol: { span: 19 }

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
      <div className={styles.normal}>
        <div className={styles.form}>
          <Row className={commons.explain}>
            <Col span={24}>
              <strong>报名要求:</strong>
              <p>1、店铺动态评分至少两项飘红</p>
              <p>2、C店要求3钻以上</p>
              <p>3、当前销量不低于30笔，评价不低于10个</p>
              <p>4、目前主要推广以下几个类目的宝贝：男女服装服饰、美食、居家用品、数码家电、母婴用品、户外运动。</p>
            </Col>

            <Col span={24} className={commons.m25}>
              <strong>推广说明:</strong>
              <p>1、不符合报名要求的、佣金不给力的商品一律不推</p>
              <p>2、佣金给力且符合要求的商品，我们会在创建清单和写帖子时选择符合主题的宝贝进行推广</p>
              <p>3、联系QQ 534095228，QQ群：183637828</p>
            </Col>
          </Row>

          <div className={commons.m10}>
            <Link to="/joins">
              <Button type="primary" size="large">下一步</Button>
            </Link>
          </div>

        </div>
      </div>


      <Spin spinning={this.state.loading}>

        <div className={commons.explain}>
          <Form horizontal form={this.props.form}>
            <Row>
            <Col span={15}>
              <FormItem label="宝贝链接" {...formItemLayout} >
                <Input {...taobaoUrlProps} />
              </FormItem>
            </Col>
            </Row>
            <Row>
              <Col span={15}>
                <FormItem label="最高佣金比例" {...formItemLayout}>
                  <Input {...maxCommissionRate} />
                </FormItem>
              </Col>
              <Col span={9}>
                （ 不是最高佣金比例，不予推广 ）
              </Col>
            </Row>
            <Row>
              <Col span={15}>
                <FormItem label="高佣金计划申请地址" {...formItemLayout}>
                  <Input {...maxCommissionUrl} />
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span={15}>
              <FormItem label="佣金计划审核联系人QQ" {...formItemLayout}>
                <Input {...QQ} />
              </FormItem>
              </Col>
              <Col span={9}>
                （ 三项联系信息必须全填 ）
              </Col>
            </Row>
            <Row>
              <Col span={15}>
                <FormItem label="联系电话" {...formItemLayout}>
                  <Input {...telePhone} />
                </FormItem>
              </Col>
            </Row>
            <Row>
            <Col span={15}>
              <FormItem label="联系微信" {...formItemLayout}>
                <Input {...wechat} />
              </FormItem>
            </Col>
            </Row>
            <Row>
              <Col>
                <FormItem wrapperCol={{ span: 4, offset: 4 }} style={{ marginTop: 24 }}>
                  <Button type="primary" onClick={this.handleSubmit}>提交</Button>
                  &nbsp;&nbsp;&nbsp;
                  <Button type="ghost" onClick={this.handleReset}>重置</Button>
                </FormItem>
              </Col>
            </Row>
          </Form>
        </div>
      </Spin>
      );
  }
});
Joins = CreateForm()(Joins);


export default Joins;
