import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Affix } from 'antd';
import LayoutHead from './../../components/Layout/LayoutHead.js';
import * as styles from './index.css';
class Index extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { userName, avatar } = this.props.homeRedu;
    return (
      <div className="personal">
        <Affix>
          <LayoutHead
            userName={userName}
            avatar={avatar}
          />
        </Affix>
        <main>
          <header className="personal-header">
            <section className="personal-left">
              <button className="personal-button">
                <img className="user-image" src="http://47.98.231.165/user.png" />
              </button>
            </section>
            <section className="personal-right">
            </section>
          </header>
        </main>
      </div>
    );
  }
}
function mapStateToProps(state,oWnprops) {
  return state;
}
export default connect(mapStateToProps)(Index);