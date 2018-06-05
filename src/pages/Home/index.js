import React,{ Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { connect } from 'react-redux';
import { Menu, Icon, List, Spin, Affix, Row, Col, Layout, Avatar, message } from 'antd';
import ItemCard from './../../components/ItemCard/ItemCard.js';
import PropTypes from 'prop-types';
import './index.css';
import { getData, collection, like, clear } from './../../actions/HomeAction';
const { Header, Footer, Sider, Content } = Layout;

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      hasMore: true,
    };
  }
  componentWillReceiveProps(nextProps) {
    message .config({
      top: 24,
      duration: 2,
      maxCount: 3,
    });
    const { dispatch } = this.props;
    const { code, message } = nextProps.homeRedu;
    if(code === 400) {
      message.warning(message, 2);
      clear(dispatch, nextProps.homeRedu);
    }
  }
  componentDidMount() {
    const { dispatch } = this.props;
    getData(dispatch,24);
  }
  handleInfiniteOnLoad = (page) => {
    const { count, total } = this.props.homeRedu;
    const { dispatch } = this.props;
    if(total[0]['count(*)'] > count) {
      this.setState({
        loading: true,
      });
      setTimeout(() => {
        getData(dispatch,count + 24);
      },500);
      setTimeout(() => {
        this.setState({
          loading: false,
        });
      },700);
    }
  };
  renderList(listData) {
    const listArray = listData.map((list,index) => {
      return (
        <ItemCard list={list} key={"card" + index} index={index} collection={this.clickCollection} like={this.clickLike} />
      );
    });
    return listArray;
  }
  /**
   * [clickLogo logo点击]
   * @author  Jiang
   * @return {[type]} [description]
   */
  clickLogo = () => {
    location.reload();
  };
  /**
   * [clickIcon 用户登录]
   * @author  Jiang
   * @return {[type]} [description]
   */
  clickUser = () => {
    this.props.history.push('/user');
  };
  /**
   * [collection 用户收藏]
   * @author  Jiang
   * @return {[type]} [description]
   */
  clickCollection = () => {
    const { dispatch } = this.props;
    collection(dispatch, this.props.homeRedu);
  };
  /**
   * [like 用户点赞]
   * @author  Jiang
   * @return {[type]} [description]
   */
  clickLike = () => {
    const { dispatch } = this.props;
    like(dispatch, this.props.homeRedu);
  }
  render() {
    const { loading, data } = this.state;
    const { listData, count, userName, avatar } = this.props.homeRedu;
    return (
      <div>
        <Affix>
          <Header style={{ background: '#fff', borderBottom: '1px solid #e1e1e1', height: 54 }}>
            <Row className="row" style={{ height: 54 }}>
              <Col span={12}>
                <div className="logo" onClick={this.clickLogo} />
              </Col>
              <Col span={12}>
                <div className="user">
                  { userName ? <Avatar src={avatar} icon="user" style={{ height: 28, width: 28 }} /> : <Icon type="user" className="icon" onClick={this.clickUser} /> }
                </div>
              </Col>
            </Row>
          </Header>
        </Affix>
        <Content>
          <InfiniteScroll
            initialLoad={false}
            pageStart={0}
            loadMore={this.handleInfiniteOnLoad}
            hasMore={!this.state.loading && this.state.hasMore}
            useWindow={true}
            threshold={10}
          >
          <div className="cardDiv">
            {this.renderList(listData)}
          </div>
          {this.state.loading && <Spin style={{ marginTop: 10, display: 'flex', justifyContent: 'center', alignItems: 'center' }} />}
          </InfiniteScroll>
        </Content>
      </div>
    );
  }
}
Index.propTypes = {
  clickUser: PropTypes.string
};
function mapStateToProps(state,oWnprops) {
  return state;
}
export default connect(mapStateToProps)(Index);