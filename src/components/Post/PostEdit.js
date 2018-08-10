import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Button } from 'antd';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import * as styles from './PostEdit.css';
class PostEdit extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      style: {

      },
      clientY: 300,
    };
    this.out = false;
    this.x = 0;
    this.y = 0;
    this.h = 0;
    this.offsetHeight = 0;
  }
  componentDidMount() {
    this.offsetHeight = document.body.offsetHeight;
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
      let { propsStyle } = this.props;
      let y = b.clientY - this.y;
      if(y < 0) {
        y = -(y);
        y = this.h + y;
        if(b.clientY <= 60) {
          this.setState({
            style: {
              transition: 'height 0.4s ease',
              MozTransition: 'height 0.4s ease',
              WebkitTransition: 'height 0.4s ease',
              OTransition: 'height 0.4s ease'
            }
          });
          this.props.propsStyle.height = this.offsetHeight - 56;
          return;
        }
      } else {
        y = this.h - y;
        if(propsStyle.height <= 230) {
          this.props.propsStyle.height = 230;
          this.setState({
            style: {
              transition: 'height 0.4s ease',
              MozTransition: 'height 0.4s ease',
              WebkitTransition: 'height 0.4s ease',
              OTransition: 'height 0.4s ease'
            }
          });
          return;
        }
      }
      this.props.propsStyle.height = y;
      this.setState({
        style: {
          transition: 'height 0s ease',
          MozTransition: 'height 0s ease',
          WebkitTransition: 'height 0s ease',
          OTransition: 'height 0s ease'
        }
      });
    }
  }
  grippieDown = (e) => {
    this.out = true;
    this.y = e.clientY;
    let editor = this.refs.editor;
    this.h = editor.offsetHeight;
    const self = this;
    this.grippieMove();
    e.preventDefault();
    document.onmouseup = () => {
      document.onmousemove = null;
      document.onmouseup = null;
      this.out = false;
    }
  }
  render() {
    const { clientY, style } = this.state;
    const { cancelBtn, propsStyle } = this.props;
    return (
      <div ref="editor" className="editor-div" style={{...style, ...propsStyle}}>
        <div className="grippie" onMouseDown={this.grippieDown} ></div>
        <div>
          <Button type="primary" icon="plus" style={{ borderRadius: '0' }} >创建主题</Button>
          <a className="editor-cancel" onClick={cancelBtn}>取消</a>
        </div>
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