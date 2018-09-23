import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import { login, clear } from './../../actions/UserAction';
import { tips } from './../../util.js'; 
import * as styles from './UserLogin.css';
const FormItem = Form.Item;
class UserLogin extends Component {
  constructor(props) {
    super(props);
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
    form.validateFields((err, values) => {
      if (!err) {
        login(dispatch, values);
      }
    });
  };
  render() {
    const { forgetPassword, form } = this.props;
    const { getFieldDecorator } = form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          <Input placeholder="账号或手机号或邮箱" />
        </FormItem>
        <FormItem>
          <Input type="password" placeholder="密码" />
        </FormItem>
        <FormItem>
          {/*<a>第三方登录</a>*/}
          <a className="login-form-forgot" onClick={forgetPassword}>忘记密码</a>
          <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
        </FormItem>
      </Form>
    );
  }
}
const WrappedNormalLoginForm = Form.create()(UserLogin);
function mapStateToProps(state, oWnprops) {
  return state;
}
export default connect(mapStateToProps)(withRouter(WrappedNormalLoginForm));