import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Table, Icon, Divider, Button, Select } from 'antd';
import LayoutHead from './../../components/Layout/LayoutHead';
import LayoutFooter from './../../components/Layout/LayoutFooter';
import PostEdit from './../../components/Post/PostEdit';
import { getAvatarA } from './../../actions/PostAction';
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
    }
    this.propsStyle = {
      height: '0px'
    };
    this.quillStyle = {
      display: 'none'
    };
  }
  componentDidMount() {
    const { dispatch } = this.props;
    getAvatarA(dispatch);
  }
  handleChange = () => {
    console.log(`selected ${value}`);
  }
  statusSwitch = (type) => {
    this.setState({
      type
    });
  }
  sendNewButton = () => {
    this.propsStyle = {
      height: '330px'
    };
    this.quillStyle = {
      display: 'block',
      height: '160px',
      transition: 'height 0s ease',
      MozTransition: 'height 0s ease',
      WebkitTransition: 'height 0s ease',
      OTransition: 'height 0s ease'
    };
    const { isRender } = this.state;
    this.setState({
      isRender: !isRender
    });
  }
  cancelBtn = () => {
    this.propsStyle = {
      height: '0px'
    };
    this.quillStyle = {
      display: 'none',
      height: '160px',
    };
    const { isRender } = this.state;
    this.setState({
      isRender: !isRender
    });
  }
  render() {
    const { history, postRedu } = this.props;
    const { userName, avatar, buttons } = postRedu;
    const { type } = this.state;
    const columns = [{
      title: '主题',
      dataIndex: 'theme',
      key: 'theme',
      width: '45%',
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
      width: '10%'
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
                buttons.map((list, key) => {
                  let name = 'post-button';
                  if(type === list.type) {
                    name = 'post-button post-button-click';
                  }
                  return (
                    <button className={name} key={key} onClick={this.statusSwitch.bind(this, list.type)}>{list.name}({list.total})</button>
                  )
                })
              }
            </div>
            <Button type="primary" icon="plus" style={{ borderRadius: '0' }} onClick={this.sendNewButton} >发新主题</Button>
          </div>
          <Table columns={columns} dataSource={data} pagination={false} />
        </div>
        <PostEdit cancelBtn={this.cancelBtn} propsStyle={this.propsStyle} quillStyle={this.quillStyle} />
      </div>
    );
  }
}
function mapStateToProps(state,oWnprops) {
  return state;
}
export default connect(mapStateToProps)(Index);