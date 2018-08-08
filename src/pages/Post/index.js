import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Table, Icon, Divider } from 'antd';
import LayoutHead from './../../components/Layout/LayoutHead.js';
import LayoutFooter from './../../components/Layout/LayoutFooter.js';
import { getAvatarA } from './../../actions/PostAction';
import * as styles from './index.css';
class Index extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const { dispatch } = this.props;
    getAvatarA(dispatch);
  }
  render() {
    const { history, postRedu } = this.props;
    const { userName, avatar } = postRedu;
    const columns = [{
      title: '主题',
      dataIndex: 'theme',
      key: 'theme',
      width: '50%',
      render: text => <a href="javascript:;">{text}</a>
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
      width: '5%'
    }, {
      title: '浏览',
      dataIndex: 'browse',
      key: 'browse',
      width: '10%'
    }, {
      title: '活动',
      dataIndex: 'activity',
      key: 'activity',
      width: '15%'
    }];
    const data = [{
      key: '1',
      theme: 'biblibilbi',
      classification: '分享',
      user: 32,
      reply: '3',
      browse: 'aaa',
      activity: '30分钟'
    }, {
      key: '2',
      theme: 'zzzz',
      classification: '摄影',
      user: 32,
      reply: '5',
      browse: 'aaa',
      activity: '30分钟'
    }, {
      key: '3',
      theme: 'lalala',
      classification: '人文',
      user: 32,
      reply: '6',
      browse: 'aaa',
      activity: '30分钟'
    }];
    return (
      <div>
        <LayoutHead 
          userName={userName}
          avatar={avatar}
          history={history}
        />
        <Table columns={columns} dataSource={data} pagination={false} />
      </div>
    );
  }
}
function mapStateToProps(state,oWnprops) {
  return state;
}
export default connect(mapStateToProps)(Index);