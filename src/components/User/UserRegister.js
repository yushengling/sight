import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button, message } from 'antd';
import { register, clear } from './../../actions/UserAction';
import { tips } from './../../util.js'; 
import * as styles from './UserRegister.css';
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
  componentDidMount() {
    let canVas = this.refs.myCanvas;
    var w = 192;
    var h = 40;
    var context = canVas.getContext("2d");
    context.fillStyle = this.rc(180,230);
    context.fillRect(0, 0, w, h);
    var pool = "ABCDEFGHIJKLIMNOPQRSTUVWSYZ1234567890";
    for(var i = 0; i < 4; i++) {
      var c = pool[this.rn(0, pool.length)];//随机的字
      this.numbers.push(c);
      var fs = this.rn(18, 40);//字体的大小
      var deg = this.rn(-30, 30);//字体的旋转角度
      context.font = fs + 'px Simhei';
      context.textBaseline = "top";
      context.fillStyle = this.rc(80,150);
      context.save();
      context.translate(30 * i + 15,15);
      context.rotate(deg * Math.PI / 180);
      context.fillText(c, -15 + 5, -15);
      context.restore();
    }
    for(var i = 0; i < 5; i++) {
      context.beginPath();
      context.moveTo(this.rn(0,w),this.rn(0,h));
      context.lineTo(this.rn(0,w),this.rn(0,h));
      context.strokeStyle = this.rc(180,230);
      context.closePath();
      context.stroke();
    }
    for(var i = 0; i < 40; i++) {
      context.beginPath();
      context.arc(this.rn(0, w),this.rn(0, h), 1, 0, 2 * Math.PI);
      context.closePath();
      context.fillStyle = this.rc(150,200);
      context.fill();
    }
  }
  rc(min, max) {
      var r = this.rn(min, max);
      var g = this.rn(min, max);
      var b = this.rn(min, max);
      return `rgb(${r},${g},${b})`;
  }
  rn(min, max) {
    return  parseInt(Math.random()*(max-min)+min);
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const { dispatch } = this.props;
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
              <canvas ref="myCanvas" width="192" height="40"></canvas>
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