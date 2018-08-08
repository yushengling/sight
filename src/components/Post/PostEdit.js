import React,{ Component } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import * as styles from './index.css';
class PostEdit extends Component {
  constructor(props) {
    super(props);
  }
  uploadImageCallBack = (file) => {
    console.log(file);
  }
  render() {
    return (
      <div>
        <Editor
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
      </div>
    );
  }
}
function mapStateToProps(state,oWnprops) {
  return state;
}
export default connect(mapStateToProps)(PostEdit);