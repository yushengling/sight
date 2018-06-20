import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Affix, Button, Modal, message, Spin } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';
import LayoutHead from './../../components/Layout/LayoutHead.js';
import { getAvatarA, uploadImagesA, uploadAvatarA, getImagesA, signOutA } from './../../actions/PersonalAction.js';
import * as styles from './index.css';
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      loading: false,
      hasMore: true
    };
  }
  componentWillMount() {
    const { dispatch } = this.props;
    getAvatarA(dispatch, 24);
  }
  componentWillReceiveProps(nextProps) {
    const { history } = this.props;
    const { userName } = nextProps.personalRedu;
    if(!userName) {
      history.push('/');
    }
  }
  settingBtn() {
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
  uploadAvatar(e) {
    let files = this.refs.avatar.files;
    let num = files.length;
    const { dispatch } = this.props;
    const formData = this.getFormData(files, num);
    uploadAvatarA(dispatch, formData);
    e.target.value = '';
  }
  getFormData(files, num) {
    let formData = new FormData();
    for (let i = 0; i < num; i++) {
      files[i].thumb = URL.createObjectURL(files[i]);
      formData.append('filedata', files[i]);
    }
    return formData;
  }
  uploadImages(e) {
    let files = this.refs.images.files;
    let num = files.length;
    const { dispatch, personalRedu } = this.props;
    const { count } = personalRedu;
    if(num === 0) {
      message.error('请上传少于50张图片');
      return;
    }
    const formData = this.getFormData(files, num);
    uploadImagesA(dispatch, formData, count);
    e.target.value = '';
  }
  handleInfiniteOnLoad = (page) => {
    const { dispatch, personalRedu } = this.props;
    const { count, total } = personalRedu;
    if(total[0]['count(*)'] > count) {
      this.setState({
        loading: true,
      });
      setTimeout(() => {
        getImagesA(dispatch,count + 24);
      },500);
      setTimeout(() => {
        this.setState({
          loading: false,
        });
      },700);
    }
  };
  renderList(listData) {
    let listArray = [];
    let count = 0;
    for(let i in listData) {
      let list = listData[i];
      listArray.push(<img key={count++} className="all-image" src={list} />);
    }
    return listArray;
  }
  signOut() {
    const { dispatch } = this.props;
    signOutA(dispatch);
  }
  setting() {
    const { history } = this.props;
    const appVersion = navigator.appVersion;
    if(appVersion.indexOf('Android') || appVersion.indexOf('iPhone')) {
      history.push('/passwordchange');
    } else {
      history.push('/setting');
    }
  }
  render() {
    const { history, personalRedu } = this.props;
    const { userName, avatar, listData } = personalRedu;
    const { visible, loading, hasMore } = this.state;
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
                onChange={this.uploadAvatar.bind(this)}
              />
              <label className="personal-label" htmlFor="upload-file" >
                <img className="user-image" src={avatar} />
              </label>
            </section>
            <section className="personal-right">
              <div className="personal-one">
                <h1 className="personal-name">{userName}</h1>
                <Button className="personal-setting" onClick={this.settingBtn.bind(this)} >设置</Button>
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
                  onChange={this.uploadImages.bind(this)}
                />
                <label className="personal-upload" htmlFor="upload-images-file">上传图片</label>
              </section>
            </section>
          </header>
          <div className="personal-content">
            图片
          </div>
          <section>
            {
              listData[0] ? <InfiniteScroll
              initialLoad={false}
              pageStart={0}
              loadMore={this.handleInfiniteOnLoad}
              hasMore={!loading && hasMore}
              useWindow={true}
              threshold={10}
            >
              <div className="personal-content-div">
                {this.renderList(listData)}
              </div>
              { loading && <Spin style={{ marginTop: 10, display: 'flex', justifyContent: 'center', alignItems: 'center' }} /> }
            </InfiniteScroll> : <h1 className="personal-clear">您暂时没有图片</h1>
            }
          </section>
          <Modal
            visible={visible}
            className="personal-modal"
            closable={false}
            footer={null}
            confirmLoading={false}
          >
            <div className="personal-modal-content" onClick={this.setting.bind(this)}>
              更改密码
            </div>
            <div className="personal-modal-content" onClick={this.signOut.bind(this)}>
              登出
            </div>
            <div className="personal-modal-cancel" onClick={this.settingBtn.bind(this)}>
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