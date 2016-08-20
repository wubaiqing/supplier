// 商家后台

import React, { Component,propTypes } from 'react';
import { connect } from 'react-redux';
import $ from "jquery";

import commons from '../Common/Common.less';
import styles from './Joins.less';

import Enroll from '../Enroll/Enroll';

// 表单
import { Form, Input, Button, Checkbox, Steps, Row, Col, Spin, Modal, Select} from 'antd';
const FormItem = Form.Item;
const CreateForm = Form.create;
const Option = Select.Option;


let Joins = React.createClass({

  /**
   * 显示加载状态
   */
  getInitialState() {
    return { loading: false };
  },

  /**
   * 重置
   */
  handleReset(e) {
    e.preventDefault();
    this.props.form.resetFields();
  },

  handleMenuClick(e) {

  },

  /**
   * 重置
   */
  handleSubmit(e) {
    // 禁止向下传递事件
    e.preventDefault();

    // 当前对象
    let input = this;

    // 验证字段信息
    this.props.form.validateFields((errors, values) => {
      if (!!errors) {
        return;
      }

      // 设置Spin状态
      input.state.loading = true;
      $.getJSON('http://we.taokedaniu.com/api/supplier', {...this.props.form.getFieldsValue()}, (data) => {
        // 成功提示
        if (data.status) {
          const modal = Modal.success({
            title: '提交成功',
            okText: '关闭',
          });
          setTimeout(() => modal.destroy(), 1000);
          input.state.loading = false;
          input.props.form.resetFields();
        } else {
          const modal = Modal.success({
            title: '失败，请联系QQ反馈',
            okText: '关闭',
          });
          setTimeout(() => modal.destroy(), 1000);
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
      wrapperCol: { span: 18 }
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
      { message: '请填写联系电话' },
      ],
    });

    const reason = getFieldProps('reason', {
      initialValue: '',
      rules: [
      { required: true, message: '请填写推荐理由' },
      ],
    });

    const wechat = getFieldProps('wechat', {
      initialValue: '',
      rules: [
      { message: '请填写微信' },
      ],
    });

    const type = getFieldProps('type', {
      initialValue: '',
      rules: [
      { message: '请填选择分类' },
      ],
    });

    const catId = getFieldProps('cat_id', {
      initialValue: '',
      rules: [
      { message: '请填选择分类' },
      ],
    });


    return (


      <Spin spinning={this.state.loading}>
        <Enroll />


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

              <FormItem label="商品分类" {...formItemLayout}>
                <Select style={{ width: 200 }}
                  {...catId}
                >
                  <Option value="1">时尚车主</Option>
                  <Option value="2">潮女搭配师</Option>
                  <Option value="3">居家巧匠</Option>
                  <Option value="4">型男塑造师</Option>
                  <Option value="5">户外行者</Option>
                  <Option value="6">美食专家</Option>
                  <Option value="7">数码极客</Option>
                  <Option value="8">美妆老师</Option>
                  <Option value="9">文娱先锋</Option>
                  <Option value="10">母婴达人</Option>
                </Select>
              </FormItem>
            </Col>
            </Row>
            <Row>
            <Col span={15}>
              <FormItem label="商品推荐理由" {...formItemLayout}>
                <Input {...reason} />
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
