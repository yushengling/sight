import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Table, Icon, Divider, Button, Select, Spin } from 'antd';
import LayoutHead from './../../components/Layout/LayoutHead';
import PostEdit from './../../components/Post/PostEdit';
import UserLoginModal from './../../components/User/UserLoginModal';
import { getAvatarA, getPostDatasA } from './../../actions/PostAction';
import InfiniteScroll from 'react-infinite-scroller';
import * as styles from './index.css';
const Option = Select.Option;
const Options = [
  {
    name:'全部',
    value: 'all'
  },
  {
    name:'人物',
    value: 'character'
  },
  {
    name:'黑白',
    value: 'bw'
  },
  {
    name:'城市',
    value: 'city'
  },
  {
    name:'美食',
    value: 'food'
  },
  {
    name:'动物',
    value: 'animal'
  },
  {
    name: '未分类',
    value: 'unclassified'
  }
];
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'new',
      isRender: false,
      isShow: false,
      loading: false,
      hasMore: true,
      visible: false,
    };
    this.propsStyle = {
      height: 0
    };
    this.quillStyle = {
      display: 'none'
    };
  }
  componentDidMount() {
    const { dispatch, postRedu: { count, selectValue } } = this.props;
    getAvatarA(dispatch, count, selectValue);
  }
  handleChange = (value) => {
    const { dispatch, postRedu: { count } } = this.props;
    getPostDatasA(dispatch, 30, value);
  }
  statusSwitch = (type) => {
    this.setState((prevState, props) => ({
      type
    }));
  }
  handleInfiniteOnLoad = (page) => {
    const { dispatch, postRedu: { total, count, selectValue } } = this.props;
    if(total[0]['count(*)'] > count) {
      this.setState((prevState, props) => ({
        loading: true,
      }));
      setTimeout(() => {
        getPostDatasA(dispatch, count + 30, selectValue);
      },500);
      setTimeout(() => {
        this.setState((prevState, props) => ({
          loading: false,
        }));
      },700);
    }
  };
  sendNewButton = () => {
    this.propsStyle = {
      height: 330
    };
    this.quillStyle = {
      display: 'block',
      height: 160,
      transition: 'height 0s ease',
      MozTransition: 'height 0s ease',
      WebkitTransition: 'height 0s ease',
      OTransition: 'height 0s ease'
    };
    const { isRender } = this.state;
    this.setState((prevState, props) => ({
      isRender: !isRender,
      isShow: true,
    }));
  }
  getPostDatas = () => {
    const { dispatch, postRedu: { count, selectValue } } = this.props;
    getPostDatasA(dispatch, count, selectValue);
  }
  cancelBtn = () => {
    this.propsStyle = {
      height: 0
    };
    this.quillStyle = {
      display: 'none'
    };
    const { isRender } = this.state;
    this.setState((prevState, props) => ({
      isRender: !isRender,
      isShow: false,
    }));
  };
  postDetail(key) {
    const { history } = this.props;
    localStorage.setItem('postId', key);
    history.push('/postDetail');
  }
  handleOk = () => {
    this.setState(() => ({
      visible: true,
    }));
  };
  handleCancel = () => {
    this.setState(() => ({
      visible: false,
    }));
  };
  render() {
    const { history, postRedu: { userName, avatar, buttons, lists, count } } = this.props;
    const { type, isShow, loading, hasMore, visible } = this.state;
    const columns = [{
      title: '主题',
      dataIndex: 'theme',
      key: 'theme',
      width: '45%',
      className: 'post-theme',
      render: (theme, list) => {
        return <div onClick={this.postDetail.bind(this, list.id)}>{theme}</div>
      }
    }, {
      title: '分类',
      dataIndex: 'classification',
      key: 'classification',
      width: '10%'
    }, {
      title: '用户',
      dataIndex: 'user',
      key: 'user',
      width: '10%'
    }, {
      title: '回复',
      dataIndex: 'reply',
      key: 'reply',
      width: '10%'
    }, {
      title: '浏览',
      dataIndex: 'browse',
      key: 'browse',
      width: '10%'
    }];
    let datas = {};
    ({ datas: datas.initialLoad = false, datas: datas.pageStart = 0, datas: datas.loadMore = this.handleInfiniteOnLoad, datas: datas.hasMore = !loading && hasMore, datas: datas.useWindow = true, datas: datas.threshold = 10, datas: datas.style = { maxHeight: '100%' } } = {});
    let edits = {};
    ({ edits: edits.cancelBtn = this.cancelBtn, edits: edits.propsStyle = this.propsStyle, edits: edits.quillStyle = this.quillStyle, edits: edits.getPostDatas = this.getPostDatas, edits: edits.isShow = isShow, edits: edits.handleOk = this.handleOk } = {});
    return (
      <div>
        <LayoutHead 
          userName={userName}
          avatar={avatar}
          history={history}
        />
        <div className="post">
          <div className="post-sendnewtheme">
            <div>
              <Select
                defaultValue="全部"
                style={{ width: 120 }}
                onChange={this.handleChange}
              >
                {
                  Options.map((list, key) => 
                    <Option value={list.value} key={key}>{list.name}</Option>
                  )
                }
              </Select>
              {
                /*buttons.map((list, key) => {
                  let name = 'post-button';
                  if(type === list.type) {
                    name = 'post-button post-button-click';
                  }
                  return (
                    <button className={name} key={key} onClick={this.statusSwitch.bind(this, list.type)}>{list.name}({list.total})</button>
                  )
                })*/
              }
            </div>
            <Button type="primary" icon="plus" style={{ borderRadius: '0' }} onClick={this.sendNewButton} >发新主题</Button>
          </div>
          <InfiniteScroll
            {...datas}
          >
            <Table columns={columns} dataSource={lists} pagination={false} />
            { loading && <Spin style={{ marginTop: 10, display: 'flex', justifyContent: 'center', alignItems: 'center' }} /> }
          </InfiniteScroll>
        </div>
        <PostEdit {...edits} />
        <UserLoginModal visible={visible} handleCancel={this.handleCancel} />
      </div>
    );
  }
}
function mapStateToProps(state,oWnprops) {
  return state;
}
export default connect(mapStateToProps)(Index);