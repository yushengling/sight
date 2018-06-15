import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Affix, Button, Modal, message } from 'antd';
import LayoutHead from './../../components/Layout/LayoutHead.js';
import { getAvatar, uploadImages } from './../../actions/PersonalAction.js';
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
  upload(type) {
    let files;
    const { dispatch } = this.props;
    if(type === 1) {
      files = this.refs.avatar.files
    } else {
      files = this.refs.images.files;
    }
    let count = files.length;
    if(count === 0) {
      message.error('请上传少于50张图片');
      return;
    }
    let formData = new FormData();
    for (let i = 0; i < count; i++) {
      files[i].mode = type;
      files[i].thumb = URL.createObjectURL(files[i]);
      formData.append('filedata', files[i]);
    }
    uploadImages(dispatch, formData);
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
              <input
                id="upload-file"
                className="personal-avatar-input"
                accept="image/*"
                type="file"
                ref="avatar"
                hidden="hidden"
                onChange={this.upload.bind(this, 1)}
              />
              <label className="personal-label" htmlFor="upload-file" >
                <img className="user-image" src="http://47.98.231.165/user.png" />
              </label>
            </section>
            <section className="personal-right">
              <div className="personal-one">
                <h1 className="personal-name">测试测试测试测试测试测试测试</h1>
                <Button className="personal-setting" onClick={this.setting.bind(this)} >设置</Button>
              </div>
              <section className="personal-two">
                <input
                  id="upload-images-file"
                  className="personal-images-input"
                  accept="image/*"
                  multiple
                  size={50}
                  ref="images"
                  type="file"
                  hidden="hidden"
                  onChange={this.upload.bind(this, 2)}
                />
                <label className="personal-upload" htmlFor="upload-images-file">上传图片</label>
              </section>
            </section>
          </header>
          <div className="personal-content">
            图片
          </div>
          <section className="personal-content-section">
            <img className="all-image" src="http://47.98.231.165/user.png" />
            <img className="all-image" src="http://47.98.231.165/user.png" />
            <img className="all-image" src="http://47.98.231.165/user.png" />
          </section>
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