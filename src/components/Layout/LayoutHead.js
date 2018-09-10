import React,{ PureComponent } from 'react';
import { Layout, Row, Col, Icon, Affix } from 'antd';
import { connect } from 'react-redux';
import * as styles from './LayoutHead.css';
import { getAvatar } from './../../actions/LayoutHeadAction.js';
const { Header } = Layout;
class LayoutHead extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const { dispatch } = this.props;
    getAvatar(dispatch);
  }
  render() {
    const { layoutHeadRedu: { userName, avatar }, history } = this.props;
    return (
      <Affix>
        <div className="header-bar"></div>
        <Header className="header">
          <Row className="row" style={{ height: 54 }}>
            <Col span={12}>
              <div className="logo" onClick={() => {
                if(location.pathname === '/') {
                  location.reload(true);
                } else {
                  history.push('/');
                }
              }} />
            </Col>
            <Col span={12} className="header-row-col">
              <span className="header-row-col-compass">
                <Icon type="compass" className="icon" onClick={() => history.push('/post')} />
              </span>
              <span className="header-row-col-user">
                { userName ? <img src={avatar} className="images" onClick={() => history.push('/personal')} /> : <Icon type="user" className="icon" onClick={() => history.push('/user') } /> }
              </span>
            </Col>
          </Row>
        </Header>
      </Affix>
    );
  }
}
function mapStateToProps(state, oWnprops) {
  return state;
}
export default connect(mapStateToProps)(LayoutHead);