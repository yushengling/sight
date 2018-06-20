import React,{ Component } from 'react';
import { connect } from 'react-redux';
import * as styles from './LayoutFooter.css';
function LayoutFooter(props) {
  let footer = '';
  const { diffrents } = props;
  if(diffrents) {
    footer = 'layoutfooter-bak';
  } else {
    footer = 'layoutfooter';
  }
  return (
    <footer className={footer}>
      © 2018 视线
    </footer>
  )
}
function mapStateToProps(state,oWnprops) {
  return state;
}

export default connect(mapStateToProps)(LayoutFooter)