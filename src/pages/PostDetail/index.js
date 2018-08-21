import React,{ Component } from 'react';
import { connect } from 'react-redux';
import LayoutHead from './../../components/Layout/LayoutHead';
import { getPostDetailA } from './../../actions/PostDetailAction';
import * as styles from './index.css';
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  componentDidMount() {
    const { dispatch } = this.props;
    const postId = localStorage.getItem('postId');
    getPostDetailA(dispatch, postId);
  }
  render() {
    const { postDetailRedu: list, history, postDetailRedu } = this.props;
    const { userName, avatar, theme, editor_value, classification } = list;
    console.log(theme);
    return (
      <div>
        <LayoutHead 
          userName={userName}
          avatar={avatar}
          history={history}
        />
        <div>
          <h1>{theme}</h1>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state, oWnprops) {
  return state;
}
export default connect(mapStateToProps)(Index);