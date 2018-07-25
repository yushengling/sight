import React,{ Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { connect } from 'react-redux';
import { Affix } from 'antd';
import Home from './../../components/Home/Home.js';
import LayoutHead from './../../components/Layout/LayoutHead.js';
import './index.css';
const Index = () => {
  return (
    <div style={{ height: '100%' }}>
      <Affix>
        <LayoutHead></LayoutHead>
      </Affix>
      <Home />
    </div>
  );
}
function mapStateToProps(state,oWnprops) {
  return state;
}
export default connect(mapStateToProps)(Index);