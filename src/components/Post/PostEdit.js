import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Button, Input, Select } from 'antd';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import * as styles from './PostEdit.css';
const Option = Select.Option;
const Options = [
  {
    name:'全部',
    value: 'all'
  },
  {
    name:'人物',
    value: 'character'
  },
  {
    name:'黑白',
    value: 'bw'
  },
  {
    name:'城市',
    value: 'city'
  },
  {
    name:'美食',
    value: 'food'
  },
  {
    name:'动物',
    value: 'animal'
  },
  {
    name: '未分类',
    value: 'unclassified'
  }
];
class PostEdit extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      style: {

      },
      isRender: false,
      clientY: 300
    };
    this.out = false;
    this.y = 0;
    this.h = 0;
    this.offsetHeight = 0;
    this.childHeight = 0;
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
      const { isRender } = this.state;
      let y = b.clientY - this.y;
      if(y < 0) {
        y = -(y);
        y = this.h + y;
        if(b.clientY <= 60) {
          this.setState({
            isRender: !isRender
          });
          this.props.propsStyle.height = this.offsetHeight - 56;
          return;
        }
      } else {
        y = this.h - y;
        if(propsStyle.height <= 230) {
          this.props.propsStyle.height = 230;
          this.setState({
            isRender: !isRender
          });
          return;
        }
      }
      this.props.propsStyle.height = y;
      this.childHeight = y - 193;
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
      this.setState({
        style: {
          transition: 'height 0.4s ease',
          MozTransition: 'height 0.4s ease',
          WebkitTransition: 'height 0.4s ease',
          OTransition: 'height 0.4s ease'
        }
      });
    }
  }
  handleChange = () => {

  }
  render() {
    const { style } = this.state;
    const { cancelBtn, propsStyle } = this.props;
    return (
      <div ref="editor" className="editor-div" style={{...style, ...propsStyle}}>
        <div className="grippie" onMouseDown={this.grippieDown} ></div>
        <div>
          <Button type="primary" icon="plus" style={{ borderRadius: '0' }} >创建主题</Button>
          <a className="editor-cancel" onClick={cancelBtn}>取消</a>
        </div>
        <div>
          <Input className="title-input" placeholder="输入标题" />
          <Select
            defaultValue="未分类"
            style={{ width: '20%', marginLeft: '30px' }}
            onChange={this.handleChange}
          >
            {
              Options.map((list, key) => 
                <Option value={list.value} key={key}>{list.name}</Option>
              )
            }
          </Select>
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