import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button, message } from 'antd';
import { updatePassword, clear, tips, getCode } from './../../actions/UserAction';
import { userTips } from './../../util.js'; 
import * as styles from './UserForgetPassword.css';
const FormItem = Form.Item;
class UserForgetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formItems: ['phone|手机号|0', 'code|验证码|0', 'newpassword|密码|0'],
    };
    this.phone = '';
    this.password = '';
  }
  static getDerivedStateFromProps(props, state) {
    const { dispatch, history, userRedu } = props;
    let datas = {};
    datas.userRedu = userRedu;
    datas.dispatch = dispatch;
    datas.clear = clear;
    datas.history = history;
    userTips.alertMessage.call(datas);
    return null;
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    if(this.returnTips()) {
      return;
    }
    let datas = {};
    datas.phone = this.phone;
    datas.password = this.password;
    updatePassword(dispatch, datas);
  }
  getCodeHandler = () => {
    const { dispatch } = this.props;
    if(this.returnTips()) {
      return;
    }
    getCode(dispatch, 2, this.phone);
  }
  returnTips = () => {
    const { dispatch } = this.props;
    const phonePattern = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
    let tipsArray = {};
    if(!(phonePattern.test(this.phone)) || !this.phone) {
      tipsArray.tips = '手机号输入不正确';
      tips(dispatch, tipsArray);
      return true;
    }
    return false;
  }
  renderFormItem() {
    const { form: { getFieldDecorator } } = this.props;
    let formItemsArray = [];
    const { formItems } = this.state;
    formItemsArray = formItems.map((list, id) => {
      let validateStatus, hasFeedback;
      if(parseInt(list.split('|')[2]) === 1) {
        hasFeedback = true;
        validateStatus = 'success';
      } else if(parseInt(list.split('|')[2]) === 2) {
        hasFeedback = true;
        validateStatus = 'error';
      }
      let suffix = '';
      if(id == 1) {
        suffix = <span className="user-code" onClick={this.getCodeHandler.bind(this)}>获取验证码</span>
      }
      return (
        <FormItem key={id} hasFeedback validateStatus={validateStatus} >
          <Input type={list.split('|')[0]} placeholder={list.split('|')[1]} suffix={suffix} onInput={this.inputHanlder.bind(this, id)} />
        </FormItem>
      )
    });
    return formItemsArray;
  }
  inputHanlder = (id, e) => {
    let value = e.target.value;
    let { formItems } = this.state;
    switch(id) {
      case 0:
        const phonePattern = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
        if(!value) {
          this.phone = value;
          formItems[0] = formItems[0].replace(/[0-9]/, 2);
          break;
        }
        if(phonePattern.test(value)) {
          formItems[0] = formItems[0].replace(/[0-9]/, 1);
          this.phone = value;
        } else {
          formItems[0] = formItems[0].replace(/[0-9]/, 2);
        }
      break;
    }
    this.setState(() => ({
      formItems
    }));
  }
  render() {
    const { userRedu: { tips, loading, code } } = this.props;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        {this.renderFormItem()}
        <FormItem>
          <Button loading={loading} type="primary" htmlType="submit" className="login-form-button user-change">修改</Button>
        </FormItem>
        {
          code === 200 ? <p className="forget-text-tips" style={{ color: '#52c419' }}>{tips}</p> : <p className="forget-text-tips">{tips}</p>
        }
      </Form>
    );
  }
}

const WrappedRegistrationForm = Form.create()(UserForgetPassword);
function mapStateToProps(state, oWnprops) {
  return state;
}
export default connect(mapStateToProps)(WrappedRegistrationForm);