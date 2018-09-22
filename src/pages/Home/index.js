import React,{ Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { connect } from 'react-redux';
import { Spin, message, BackTop } from 'antd';
import ItemCard from './../../components/ItemCard/ItemCard.js';
import LayoutHead from './../../components/Layout/LayoutHead.js';
import LayoutFooter from './../../components/Layout/LayoutFooter.js';
import PropTypes from 'prop-types';
import { getData, userClick, clear, clearListData } from './../../actions/HomeAction';
import './index.css';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      hasMore: true,
    };
  }
  componentWillReceiveProps(nextProps) {
    message.config({
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
    getData(dispatch, 10);
  }
  handleInfiniteOnLoad = (page) => {
    const { dispatch, homeRedu: { count, total } } = this.props;
    if(total[0]['count(*)'] > count) {
      this.setState(() => ({
        loading: true,
      }));
      setTimeout(() => {
        getData(dispatch, count + 10);
      }, 200);
      setTimeout(() => {
        this.setState(() => ({
          loading: false,
        }));
      }, 200);
    }
  };
  renderList(listData) {
    const listArray = listData.map((list,index) => {
      const { id } = list;
      return (
        <ItemCard
          list={list}
          key={"card" + index}
          index={index}
        />
      );
    });
    return listArray;
  }
  onload = () => {
    const { dispatch } = this.props;
    clearListData(dispatch);
    setTimeout(() => {
      getData(dispatch, 16);
    }, 500);
  }
  render() {
    const { loading, hasMore } = this.state;
    const { history, homeRedu: { listData, isRender } } = this.props;
    let datas = {};
    ({ datas: datas.initialLoad = false, datas: datas.pageStart = 0, datas: datas.loadMore = this.handleInfiniteOnLoad, datas: datas.hasMore = !loading && hasMore, datas: datas.useWindow = true, datas: datas.threshold = 10 } = {});
    return (
      <section>
        <LayoutHead history={history} onload={this.onload.bind(this)} />
        {
          isRender && <Spin size="large" />
        }
        <main className="home-main">
          <section className="home-body-section">
            <InfiniteScroll
              {...datas}
            >
              <div className="home-body-left-card-div">
                {this.renderList(listData)}
              </div>
              { loading && <Spin className="loading-spin" /> }
            </InfiniteScroll>
            <section className="home-body-right-card-div">
              <div className="right-card-div-avatar">
                <img className="right-card-div-img" alt="src" src="https://scontent-hkg3-1.cdninstagram.com/vp/dcd03f20a1b867635910cdd8f755ced8/5C3F0B04/t51.2885-19/s150x150/32178164_2124523824446183_6597680605494771712_n.jpg" />
                <p className="right-card-div-name">
                  test
                </p>
              </div>
              <div>
                <ul className="right-card-list">
                  <li>
                    <span>帖子</span>
                    <span>0</span>
                  </li>
                  <li>
                    <span>收藏</span>
                    <span>0</span>
                  </li>
                  <li>
                    <span>关注</span>
                    <span>0</span>
                  </li>
                  <li>
                    <span>粉丝</span>
                    <span>0</span>
                  </li>
                </ul>
              </div>
              <div className="right-card-footer">
                © 2018 视线
              </div>
            </section>
          </section>
        </main>
        <BackTop />
      </section>
    );
  }
}

function mapStateToProps(state, oWnprops) {
  return state;
}

export default connect(mapStateToProps)(Index);