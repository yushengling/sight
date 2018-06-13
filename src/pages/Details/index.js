import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as styles from './index.css';
class Index extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    const id = sessionStorage.getItem('id');
  }
  render() {
    return (
      <div className="details-content">
        Hi,Welcome to My World,This Page.... Let me see
      </div>
    );
  }
}
function mapStateToProps(state,oWnprops) {
  return state;
}

export default connect(mapStateToProps)(Index);