import React,{ Component } from 'react';
import { VerificationCode } from 'corki-ui';
import './index.less';
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  getNumbers = (num) => {
    console.log(num);
  }

  render() {
    return (
      <div className="modal-wrapper">
        <div className="modal-content"> 
          <h1>图形验证码</h1>
          <fieldset>
            <legend>图形验证码</legend>
            <VerificationCode getNumbers={this.getNumbers} />
            <a target="_blank" href="https://github.com/xuya227939/corki-ui/tree/master/src/components/VerificationCode">How to use</a>
          </fieldset>
        </div>
      </div>
    );
  }
}

export default Index;