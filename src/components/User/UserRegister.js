import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button, message } from 'antd';
import { register, clear } from './../../actions/UserAction';
import { tips } from './../../util.js'; 
import * as styles from './UserRegister.css';
import VerificationCode from 'react-verificationcode-s';
const FormItem = Form.Item;
class UserRegister extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {};
    this.numbers = [];
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
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        register(dispatch, values);
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
  validateToNextName = (rule, value , callback) => {
    const form = this.props.form;
    const namePattern = /^\d/;
    if(value) {
      if(namePattern.test(value)) {
        callback('用户名不能以数字开头，应为字符串或中文组成');
      } else {
        callback();
      }
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
  }
  validateToNextCode = (rule, value, callback) => {
    if(value) {
      let numbers = '';
      for(let i = 0, len = this.numbers.length; i < len; i++) {
        numbers += this.numbers[i];
      }
      if(value.toUpperCase() != numbers) {
        callback('请输入正确的验证码');
      } else {
        callback();
      }
    } else {
      callback();
    }
  }
  getNumbers(value) {
    this.numbers = value;
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{
              required: true, message: '请输入用户名!',
            }, {
              validator: this.validateToNextName,
            }],
          })(
            <Input type="user" placeholder="请输入用户名" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{
              required: true, message: '请输入密码!',
            }, {
              validator: this.validateToNextPassword,
            }],
          })(
            <Input type="password" placeholder="请输入密码" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('confirm', {
            rules: [{
              required: true, message: '请确认密码!',
            }, {
              validator: this.compareToFirstPassword,
            }],
          })(
            <Input type="password" placeholder="请确认密码" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('verCode', {
            rules: [{
              required: true, message: '请确认验证码!', whitespace: true
            }, {
              validator: this.validateToNextCode,
            }],
          })(
            <span>
              <VerificationCode getNumbers={this.getNumbers.bind(this)} height="40" width="192" />
              <Input placeholder="请输入验证码" />
            </span>
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button">注册</Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedRegistrationForm = Form.create()(UserRegister);
function mapStateToProps(state, oWnprops) {
  return state;
}
export default connect(mapStateToProps)(WrappedRegistrationForm);