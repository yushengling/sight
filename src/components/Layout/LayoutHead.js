import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Layout, Row, Col, Icon, Affix } from 'antd';
import * as styles from './LayoutHead.css';
const { Header } = Layout;
function LayoutHead(props) {
  const { userName, avatar, history } = props;
  return (
    <Affix>
      <div className="header-bar"></div>
      <Header className="header">
        <Row className="row" style={{ height: 54 }}>
          <Col span={12}>
            <div className="logo" onClick={() => location.reload(true) } />
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
  )
}
export default LayoutHead;