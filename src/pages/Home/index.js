import React,{ Component } from 'react';
import { Row, Col } from 'antd';
import LayoutFooter from './../../components/Layout/LayoutFooter.js';
import ItemCard from './../../components/ItemCard/ItemCard.js';
import { getData } from './../../actions/HomeAction';
import './index.less';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <section className="home">
        <div className="home-warrper">
          <ItemCard />
          <ItemCard />
        </div>
        <LayoutFooter />
      </section>
    );
  }
}

export default Index;