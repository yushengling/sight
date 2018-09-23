import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button, message } from 'antd';
import { updatePassword, clear } from './../../actions/UserAction';
import { tips } from './../../util.js'; 
import * as styles from './UserForgetPassword.css';
const FormItem = Form.Item;
class UserForgetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }
  componentWillReceiveProps(nextProps) {
    const { userRedu } = nextProps;
    const { dispatch, history, page, handleCancel } = this.props;
    let datas = {};
    datas.userRedu = userRedu;
    datas.dispatch = dispatch;
    datas.clear = clear;
    datas.history = history;
    datas.page = page;
    datas.handleCancel = handleCancel;
    tips.alertMessage.call(datas);
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { form, dispatch } = this.props;
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        updatePassword(dispatch, values);
      }
    });
  }
  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('两个密码输入不一致！');
    } else {
      callback();
    }
  }
  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    const passWordPattern = /^(?=.*\d)(?=.*[a-z]).{6,20}$/;
    if(value) {
      if(!passWordPattern.test(value)) {
        callback('密码应为6-20位，由大小写字母及数字组成');
      } else {
        if (value && this.state.confirmDirty) {
          form.validateFields(['confirm'], { force: true });
        }
        callback();
      }
    } else {
      callback();
    }
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    let a = <span>获取验证码</span>
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem validateStatus="success" hasFeedback>
          <Input placeholder="手机号" />
        </FormItem>
        <FormItem>
          <Input placeholder="验证码" suffix={a} />
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{
              required: true, message: '请输入新密码',
            }, {
              validator: this.validateToNextPassword,
            }],
          })(
            <div>
              <Input type="password" placeholder="新密码" />
            </div>
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('confirm', {
            rules: [{
              required: true, message: '请确认新密码',
            }, {
              validator: this.compareToFirstPassword,
            }],
          })(
            <Input type="password" placeholder="新密码" />
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button">修改</Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedRegistrationForm = Form.create()(UserForgetPassword);
function mapStateToProps(state, oWnprops) {
  return state;
}
export default connect(mapStateToProps)(WrappedRegistrationForm);