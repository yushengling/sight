import React,{ PureComponent } from 'react';
import { Layout, Row, Col, Icon, Affix, Input } from 'antd';
import { connect } from 'react-redux';
import * as styles from './LayoutHead.less';
import { getAvatar } from './../../actions/LayoutHeadAction.js';
const { Header } = Layout;
const Search = Input.Search;
class LayoutHead extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const { dispatch } = this.props;
    getAvatar(dispatch);
  }
  searchText(e) {

  }
  render() {
    const { layoutHeadRedu: { userName, avatar }, history, onload } = this.props;
    return (
      <Affix>
        <Header className="header">
          <div className="header-div">
            <Row className="row header-div-row">
              <Col span={8}>
                <div className="logo" onClick={() => {
                  if(location.pathname === '/') {
                    onload();
                  } else {
                    history.push('/');
                  }
                }} />
              </Col>
              <Col span={8} className="head-search-col">
                <Search placeholder="搜索" onSearch={this.searchText.bind(this)} className="header-input" />
              </Col>
              <Col span={8} className="header-row-col">
                <span className="header-row-col-compass">
                  <Icon type="compass" className="icon" onClick={() => history.push('/post')} />
                </span>
                <span className="header-row-col-user">
                  { userName ? <img src={avatar} className="images" onClick={() => history.push('/personal')} /> : <Icon type="user" className="icon" onClick={() => history.push('/user') } /> }
                </span>
              </Col>
            </Row>
          </div>
        </Header>
      </Affix>
    );
  }
}
function mapStateToProps(state, oWnprops) {
  return state;
}
export default connect(mapStateToProps)(LayoutHead);