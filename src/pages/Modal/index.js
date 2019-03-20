import React,{ Component } from 'react';
import { Modal } from 'corki-ui';
import './index.less';
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
  }

  cancel = () => {
    this.setState({
      visible: false
    });
  };

  confirm = () => {
    this.setState({
      visible: false
    });
  }

  showModal = () => {
    this.setState({
      visible: true
    });
  }

  render() {
    const { visible } = this.state;
    return (
      <div className="modal-warrper">
        <div className="mmodal-content"> 
          <h1>Modal对话框</h1>
          <fieldset>
            <legend>模态对话框</legend>
            <button className="modal-btn" onClick={this.showModal}>Open Modal</button>
            <a target="_blank" href="https://github.com/xuya227939/corki-ui/tree/master/src/components/Modal">How to use</a>
          </fieldset>
        </div>
        <Modal
          title="hello"
          visible={visible}
          cancel={this.cancel}
          confirm={this.confirm}
        >
          <p>hello</p>
        </Modal>
      </div>
    );
  }
}

export default Index;