/**
 * 登录组件
 * @author  Jiang
 */
import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import * as styles from './UserLogin.css';
import { login, clear } from './../../actions/UserAction';
const FormItem = Form.Item;
class UserLogin extends Component {
  constructor(props) {
    super(props);
  }
  componentWillReceiveProps(nextProps) {
    const { userRedu } = nextProps;
    const { dispatch } = this.props;
    message.config({
      top: 24,
      duration: 1,
      maxCount: 3,
    });
    if(userRedu.code != undefined) {
      if(userRedu.code === 400) {
        message.warning(userRedu.message, 1);
        clear(dispatch);
      } else if(userRedu.code === 200) {
        message.success('登录成功', 1);
        setTimeout(() => {
          this.props.history.push('/');
        },700);
        clear(dispatch);
      }
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { dispatch } = this.props;
        login(dispatch, values);
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const { forgetPassword } = this.props;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: '请输入用户名!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox className="remenberMe">记住我</Checkbox>
          )}
          <a className="login-form-forgot" onClick={forgetPassword}>忘记密码</a>
          <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
        </FormItem>
      </Form>
    );
  }
}
const WrappedNormalLoginForm = Form.create()(UserLogin);
function mapStateToProps(state,oWnprops) {
  return state;
}
export default connect(mapStateToProps)(withRouter(WrappedNormalLoginForm));