import React,{ Component } from 'react';
import { connect } from 'react-redux';
import * as styles from './LayoutFooter.css';
function LayoutFooter(props) {
  return (
    <footer className="layoutfooter" >
      © 2018 视线
    </footer>
  )
}
function mapStateToProps(state,oWnprops) {
  return state;
}

export default connect(mapStateToProps)(LayoutFooter)