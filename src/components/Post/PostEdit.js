import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Button, Input, Select, message } from 'antd';
import * as styles from './PostEdit.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { createTheme, saveSelectValue, saveInputTitleValue, clearCode } from './../../actions/PostAction';
const Option = Select.Option;
const Options = [
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
        content: ""
      },
      isRender: false,
      clientY: 300,
      text: '',
      editorValue: '',
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
  componentDidUpdate() {
    const { dispatch, postRedu: { code }, postRedu, cancelBtn } = this.props;
    switch(code) {
      case 200:
        message.success('创建主题成功！');
        clearCode(dispatch, postRedu);
        setTimeout(() => {
          cancelBtn();
        }, 200);
      break;
      case 500:
        clearCode(dispatch, postRedu);
        message.error('创建主题发生错误');
      break;
      case 404:
        clearCode(dispatch, postRedu);
        message.info('请登录之后，再发表主题');
      break;
    }
  }
  handleChange = (value) => {
    const { dispatch, postRedu } = this.props;
    saveSelectValue(dispatch, value, postRedu);
  }
  inputTitleChange = (e) => {
    const { dispatch, postRedu } = this.props;
    saveInputTitleValue(dispatch, e.target.value, postRedu);
  }
  crateTheme = () => {
    const { postRedu: { editorSelectValue, inputTitleValue }, dispatch } = this.props;
    if(!editorSelectValue) {
      message.info('请输入标题！');
      return;
    }
    const { editorValue } = this.state;
    let datas = {};
    datas.editorSelectValue = editorSelectValue;
    datas.inputTitleValue = inputTitleValue;
    datas.editorValue = editorValue;
    createTheme(dispatch, datas);
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
          this.props.quillStyle.height = this.offsetHeight - 170 - 56;
          return;
        }
      } else {
        y = this.h - y;
        if(propsStyle.height <= 230) {
          this.props.propsStyle.height = 230;
          this.props.quillStyle.height = 60;
          this.setState({
            isRender: !isRender
          });
          return;
        }
      }
      this.props.propsStyle.height = y;
      this.childHeight = y - 170;
      if(this.childHeight <= 60) {
        this.childHeight = 60; 
      }
      this.props.quillStyle.height = this.childHeight;
      this.props.quillStyle.display = 'block';
      this.props.quillStyle.transition = 'height 0s ease';
      this.props.quillStyle.MozTransition = 'height 0s ease';
      this.props.quillStyle.WebkitTransition = 'height 0s ease';
      this.props.quillStyle.OTransition = 'height 0s ease';
      this.setState({
        style: {
          transition: 'height 0s ease',
          MozTransition: 'height 0s ease',
          WebkitTransition: 'height 0s ease',
          OTransition: 'height 0s ease'
        },
      });
    }
  }
  editorChange = (content, delta, source, editor) => {
    this.setState({
      editorValue: content,
    });
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
      if(this.childHeight === 0) {
        this.childHeight = 160;
      }
      this.props.quillStyle.height = this.childHeight;
      this.props.quillStyle.display = 'block';
      this.props.quillStyle.transition = 'height 0.4s ease';
      this.props.quillStyle.MozTransition = 'height 0.4s ease';
      this.props.quillStyle.WebkitTransition = 'height 0.4s ease';
      this.props.quillStyle.OTransition = 'height 0.4s ease';
      this.setState({
        style: {
          transition: 'height 0.4s ease',
          MozTransition: 'height 0.4s ease',
          WebkitTransition: 'height 0.4s ease',
          OTransition: 'height 0.4s ease'
        },
      });
    }
  }
  render() {
    const { style, text, editorValue } = this.state;
    const { cancelBtn, propsStyle, quillStyle, postRedu: { editorSelectValue, inputTitleValue, code }  } = this.props;
    let modules = {
      toolbar: [
        [{ 'header': [1, 2, false] }],
        ['bold', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}]
      ],
    };
    /*let modules = {
      toolbar: [
        [{ 'header': [1, 2, false] }],
        ['bold', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}],
        ['link', 'image']
      ],
    };*/
    /*let formats = [
      'header',
      'bold', 'blockquote',
      'list', 'bullet',
      'link', 'image'
    ];*/
    let textareaStyle = JSON.parse(JSON.stringify(quillStyle));
    if(quillStyle.height) {
      textareaStyle.height = textareaStyle.height + 44;
      quillStyle.height = quillStyle.height;
    }
    if(propsStyle.height) {
      propsStyle.height = propsStyle.height;
    }
    return (
      <div ref="editor" className="editor-div" style={{...style, ...propsStyle}}>
        <div className="grippie" onMouseDown={this.grippieDown} ></div>
        <div>
          <Button type="primary" icon="plus" style={{ borderRadius: '0' }} onClick={this.crateTheme} >创建主题</Button>
          <a className="editor-cancel" onClick={cancelBtn}>取消</a>
        </div>
        <div>
          <Input className="title-input" placeholder="输入标题" onChange={this.inputTitleChange} />
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
        <div className="editor-col">
          <div className="editor-col-div">
            <ReactQuill
              className="editor-quill"
              style={{...quillStyle}}
              value={editorValue}
              onChange={this.editorChange}
              modules={modules}
            >
            </ReactQuill>
          </div>
          <div className="editor-col-div">
            <div
              className="monitor"
              style={{...textareaStyle}}
              disabled="disabled"
              readOnly="readonly"
              dangerouslySetInnerHTML={{__html: editorValue}}
            />
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state,oWnprops) {
  return state;
}
export default connect(mapStateToProps)(PostEdit);