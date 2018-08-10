import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import * as styles from './PostEdit.css';
class PostEdit extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      clientY: 300,
    };
    this.out = false;
    this.x = 0;
    this.y = 0;
    this.h = 0;
  }
  componentDidMount() {
    
  }
  uploadImageCallBack = (file) => {
    console.log(file);
  }
  grippieMove = () => {
    const self = this;
    document.onmousemove = (b) => {
      if(!this.out) {
        return false;
      }
      let y = b.clientY - this.y;
      if(y < 0) {
        y = -(y);
        y = this.h + y + 10;
      } else {
        y = this.h - y;
      }
      this.setState({
        clientY: y,
      });
    }
  }
  grippieDown = (e) => {
    let target = e.target;
    this.out = true;
    this.y = e.clientY;
    let editor = this.refs.editor;
    this.h = editor.offsetHeight;
    const self = this;
    this.grippieMove();
    e.preventDefault();
    target.onmouseup = () => {
      document.onmousemove = null;
      target.onmouseup = null;
      this.out = false;
    }
  }
  render() {
    const { clientY } = this.state;
    let style;
    if(this.out) {
      style = {
        height: clientY,
        transition: 'height 0s ease',
        MozTransition: 'height 0s ease',
        WebkitTransition: 'height 0s ease',
        OTransition: 'height 0s ease'
      };
    }
    return (
      <div ref="editor" className="editor-div" style={style}>
        <div className="grippie" onMouseDown={this.grippieDown} ></div>
        <Col span={12}>
          <Editor
            localization={{ locale: 'zh' }}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            toolbar={{
              options: ['inline', 'list', 'link', 'textAlign', 'emoji', 'image'],
              image: { uploadCallback: this.uploadImageCallBack.bind(this), alt: { present: true, mandatory: true } },
              inline: {
                options: ['bold', 'italic']
              },
              list: {
                options: ['unordered', 'ordered'],
              },
              textAlign: {
                options: ['left', 'center', 'right'],
              },
              link: {
                inDropdown: false,
                className: undefined,
                component: undefined,
                popupClassName: undefined,
                dropdownClassName: undefined,
                showOpenOptionOnHover: true,
                defaultTargetOption: '_self',
                options: ['link'],
              }
            }}
          />
        </Col>
        <Col span={12}>
          123
        </Col>
      </div>
    );
  }
}
function mapStateToProps(state,oWnprops) {
  return state;
}
export default connect(mapStateToProps)(PostEdit);