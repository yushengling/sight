import React,{ Component } from 'react';
import LayoutFooter from './../../components/Layout/LayoutFooter.js';
import ItemCard from './../../components/ItemCard/ItemCard.js';
import Preview from './../Preview/index.js';
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
          <ItemCard
            title="Modal"
            small="弹窗"
            href="/modal"
            history={this.props.history}
          />
          <ItemCard
            title="VerificationCode"
            small="图形验证码"
            href="/verificationCode"
            history={this.props.history}
          />
        </div>
        <Preview url="https://img.downfuture.com/13026877921/9y-PLogxmyJudmV23z9HgbPX.jpeg" />
        <LayoutFooter />
      </section>
    );
  }
}

export default Index;