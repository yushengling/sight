import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Menu, Icon, Button } from 'antd';
import List from './List.js';
import Edit from './Edit.js';
const SubMenu = Menu.SubMenu;
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      leftIcon: true,
      height: '100%',
      page: 2,
    };
  }
  componentWillReceiveProps(nextProps) {
    
  }
  componentDidMount() {

  }
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
      leftIcon: !this.state.leftIcon
    });
  };
  changeMenu = (e) => {
    this.setState({
      page: e.key,
    })
  }
  render() {
    const { leftIcon, collapsed, height, page } = this.state;
    return (
      <div style={{ display: 'flex', flexDirection: 'row', height: height }}>
        <Menu
          defaultSelectedKeys={['1']}
          style={{ width: 100, position: 'relative', height: height }}
          inlineCollapsed={collapsed}
          onClick={this.changeMenu}
          inlineIndent={14}
          mode="inline"
        >
          <Menu.Item key="1">
            <div className="home-div">
              <Icon className="list-logo" />
              <span>List</span>
            </div>
          </Menu.Item>
          <Menu.Item key="2">
            <div className="home-div">
              <Icon className="edit-logo" />
              <span>Edit</span>
            </div>
          </Menu.Item>
          <div className="sider" onClick={this.toggleCollapsed}>
            {
              leftIcon ? <Icon type="left" className="menu-icon" /> : <Icon type="right" className="menu-icon" />
            }
          </div>
        </Menu>
        <div className="home-content">
          {
            page === '1' ? <List /> : <Edit />
          }
        </div>
      </div>
    );
  }
}
function mapStateToProps(state,oWnprops) {
  return state;
}
export default connect(mapStateToProps)(Home);