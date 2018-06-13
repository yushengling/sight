import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Affix, Button, Modal } from 'antd';
import LayoutHead from './../../components/Layout/LayoutHead.js';
import { getAvatar } from './../../actions/PersonalAction.js';
import * as styles from './index.css';
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ModalText: 'Content of the modal',
      visible: false,
      confirmLoading: false,
    }
  }
  componentWillMount() {
    const { dispatch } = this.props;
    getAvatar(dispatch);
  }
  setting() {
    const { visible } = this.state;
    if(visible) {
      this.setState({
        visible: false,
      });
    } else {
      this.setState({
        visible: true,
      });
    }
  }
  render() {
    const { history, personalRedu } = this.props;
    const { userName, avatar } = personalRedu;
    const { visible, confirmLoading, ModalText } = this.state;
    return (
      <div className="personal">
        <Affix>
          <LayoutHead
            userName={userName}
            avatar={avatar}
            history={history}
          />
        </Affix>
        <main className="personal-main">
          <header className="personal-header">
            <section className="personal-left">
              <button className="personal-button">
                <img className="user-image" src="http://47.98.231.165/user.png" />
              </button>
            </section>
            <section className="personal-right">
              <div className="personal-one">
                <h1 className="personal-name">测试测试测试测试测试测试测试</h1>
                <Button className="personal-setting" onClick={this.setting.bind(this)} >设置</Button>
              </div>
            </section>
          </header>
          <Modal
            visible={visible}
            className="personal-modal"
            closable={false}
            footer={null}
            confirmLoading={confirmLoading}
          >
            <div className="personal-modal-content">
              更改密码
            </div>
            <div className="personal-modal-content">
              退出
            </div>
            <div className="personal-modal-cancel" onClick={this.setting.bind(this)}>
              取消
            </div>
          </Modal>
        </main>
      </div>
    );
  }
}
function mapStateToProps(state,oWnprops) {
  return state;
}
export default connect(mapStateToProps)(Index);