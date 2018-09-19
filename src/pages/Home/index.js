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
          cardClick={this.cardClick.bind(this, list.src, list.userName)}
        />
      );
    });
    return listArray;
  }
  cardClick(img, userName) {
    const { history } = this.props;
    sessionStorage.setItem('img', img);
    sessionStorage.setItem('imgName', userName);
    history.push('/detail');
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
        <section style={{ margin: '0 auto', maxWidth: '1010px' }}>
          <InfiniteScroll
            {...datas}
          >
            <div className="card-div">
              {this.renderList(listData)}
            </div>
            { loading && <Spin className="loading-spin" /> }
          </InfiniteScroll>
          <BackTop />
        </section>
      </section>
    );
  }
}

function mapStateToProps(state, oWnprops) {
  return state;
}

export default connect(mapStateToProps)(Index);