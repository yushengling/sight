/* eslint-disable react/jsx-no-target-blank */
// eslint-disable-next-line jsx-a11y/label-has-associated-control
import React, { Component } from 'react';
import { VerificationCode } from 'corki-ui';
import './index.less';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getNumbers = (num) => {
        console.log(num);
    }

    render() {
        return (
            <div className="verificationCode-wrapper">
                <div className="verificationCode-content">
                    <h1>图形验证码</h1>
                    <fieldset>
                        <legend>图形验证码</legend>
                        <div className="verificationCode-code">
                            <VerificationCode getNumbers={this.getNumbers} />
                            <a className="verificationCode-link" target="_blank" href="https://github.com/xuya227939/corki-ui/tree/master/src/components/VerificationCode">How to use</a>
                        </div>
                    </fieldset>
                </div>
            </div>
        );
    }
}

export default Index;
