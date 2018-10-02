import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, message, Spin, Icon } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';
import LayoutHead from './../../components/Layout/LayoutHead.js';
import { getFirstImages, uploadAvatar, getImages, signOut } from './../../actions/PersonalAction.js';
import * as styles from './index.less';
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      viewVisible: false,
      loading: false,
      hasMore: true,
      src: '',
      id: 0
    };
  }
  componentDidMount() {
    const { dispatch } = this.props;
    getFirstImages(dispatch, 16);
  }
  settingBtn() {
    const { visible } = this.state;
    if(visible) {
      this.setState(() => ({
        visible: false,
      }));
    } else {
      this.setState(() => ({
        visible: true,
      }));
    }
  }
  uploadAvatar(e) {
    let files = this.refs.avatar.files;
    let num = files.length;
    const { dispatch } = this.props;
    const formData = this.getFormData(files, num);
    uploadAvatar(dispatch, formData);
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
  handleInfiniteOnLoad = (page) => {
    const { dispatch, personalRedu } = this.props;
    const { count, total } = personalRedu;
    if(total[0]['count(*)'] > count) {
      this.setState((prevState, props) => ({
        loading: true,
      }));
      setTimeout(() => {
        getImages(dispatch,count + 16);
      },500);
      setTimeout(() => {
        this.setState((prevState, props) => ({
          loading: false,
        }));
      },700);
    }
  };
  renderList(listData) {
    let images = [];
    console.log(listData);
    /*return listData.map((list, key) => {
      if(key % 2 === 0) {
        let imagesBak = [].concat(images);
        images = [];
        return (
          <div key={key}>
            {imagesBak[0]}
            {imagesBak[1]}
            {imagesBak[2]}
          </div>
        );
      }
      images.push(<img key={key} className="personal-main-list-img" src={list.src} onClick={this.view.bind(this, key)} />);
    });*/
  }
  view(id) {
    id -= 1;
    const appVersion = navigator.appVersion;
    if(appVersion.indexOf('Android') > 0) {
      return;
    } else if (appVersion.indexOf('iPhone') > 0) {
      return;
    }
    const { personalRedu } = this.props;
    const { listData } = personalRedu;
    const src = listData[id];
    this.setState((prevState, props) => ({
      src,
      id,
      viewVisible: true
    }));
  }
  viewClick(type) {
    let { id } = this.state;
    const { personalRedu } = this.props;
    const { listData } = personalRedu;
    message.config({
      duration: 2,
    });
    if(type) {
      if(id === listData.length - 1) {
        message.info('到底啦！');
        return;
      }
      id += 1;
    } else {
      if(id === 0) {
        message.info('到头啦！');
        return;
      }
      id -= 1;
    }
    const src = listData[id];
    this.setState((prevState, props) => ({
      id,
      src
    }));
  }
  close() {
    this.setState((prevState, props) => ({
      viewVisible: false
    }));
  }
  signOutHandler() {
    const { dispatch, history } = this.props;
    signOut(dispatch, history);
  }
  setting() {
    const { history } = this.props;
    const appVersion = navigator.appVersion;
    if(appVersion.indexOf('Android') > 0) {
      history.push('/passwordchange');
    } else if (appVersion.indexOf('iPhone') > 0) {
      history.push('/passwordchange');
    } else if(appVersion.indexOf('iPhone') < 0 && appVersion.indexOf('Android') < 0 ) {
      history.push('/setting');
    }
  }
  render() {
    const { history, personalRedu: { listData, avatar, userName, headId } } = this.props;
    const { visible, loading, hasMore, viewVisible, src } = this.state;
    return (
      <div className="personal">
        <LayoutHead key={headId} history={history} />
        <main className="personal-main">
          <header className="personal-main-header">
            <section className="personal-main-header-left">
              <div className="personal-main-header-left-avatar">
                <input
                  id="upload-file"
                  className="personal-avatar-input"
                  accept="image/*"
                  type="file"
                  ref="avatar"
                  hidden="hidden"
                  onChange={this.uploadAvatar.bind(this)}
                />
                <label className="personal-avatar-label" htmlFor="upload-file" >
                  <img className="avatar-image" src={avatar} />
                </label>
              </div>
            </section>
            <section className="personal-main-header-right">
              <h1 className="personal-main-header-right-account">{userName}</h1>
              <Button className="personal-main-header-right-setting" onClick={this.settingBtn.bind(this)} >设置</Button>
              <h1 className="personal-main-header-right-name">啦啦啦啦啦啦</h1>
            </section>
          </header>
          <div className="personal-main-content">
          </div>
          <section className="personal-main-list">
            {
              listData[0] ? (
                <InfiniteScroll
                  initialLoad={false}
                  pageStart={0}
                  loadMore={this.handleInfiniteOnLoad}
                  hasMore={!loading && hasMore}
                  useWindow={true}
                  threshold={10}
                >
                  <div className="personal-main-list-images">
                    {this.renderList(listData)}
                  </div>
                  { loading && <Spin className="public-spin"/> }
                </InfiniteScroll>
              ) : <h1 className="personal-main-list-clear">您暂时没有图片</h1>
            }
          </section>
          <Modal
            visible={visible}
            className="personal-main-setting-modal"
            closable={false}
            footer={null}
            confirmLoading={false}
          >
            <div className="personal-main-setting-modal-content" onClick={this.setting.bind(this)}>
              更改密码
            </div>
            <div className="personal-main-setting-modal-content" onClick={this.signOutHandler.bind(this)}>
              登出
            </div>
            <div className="personal-main-setting-modal-cancel" onClick={this.settingBtn.bind(this)}>
              取消
            </div>
          </Modal>
          <Modal
            visible={viewVisible}
            className="personal-main-images-modal"
            closable={false}
            footer={null}
            confirmLoading={false}
          >
            <img className="personal-main-images-modal-view" src={src} />
            <div className="personal-main-images-modal-view-right" onClick={this.viewClick.bind(this, true)}>
              <Icon className="personal-icon" type="right" />
            </div>
            <div className="personal-main-images-modal-view-left" onClick={this.viewClick.bind(this, false)}>
              <Icon className="personal-icon" type="left" />
            </div>
            <div className="personal-main-images-modal-view-close" onClick={this.close.bind(this)}>
              <Icon className="personal-icon" type="close" />
            </div>
          </Modal>
        </main>
      </div>
    );
  }
}
function mapStateToProps(state, oWnprops) {
  return state;
}
export default connect(mapStateToProps)(Index);