import React,{ Component } from 'react';
import LayoutFooter from './../../components/Layout/LayoutFooter.js';
import LayoutHead from './../../components/Layout/LayoutHead.js';
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
      <section>
        <LayoutHead />
        <div className="home-warrper">
          <div className="home-title">
            <h2>corki-ui</h2>
            <p>以下是目前开源的组件</p>
          </div>
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
          <ItemCard
            title="Preview"
            small="图片预览"
            href="/preview"
            history={this.props.history}
          />
        </div>
        <LayoutFooter />
      </section>
    );
  }
}

export default Index;