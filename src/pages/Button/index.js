import React,{ Component } from 'react';
// import { Button } from 'corki-ui';
import Button from './Button';
import './index.less';
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    onClick = () => {
        console.log(10);
    }

    render() {
        return (
            <div className="btn-warrper">
                <div className="btn-content"> 
                    <h1>按钮</h1>
                    <fieldset>
                        <legend>支持不同颜色展示</legend>
                        <Button onClick={this.onClick}>
                            123
                        </Button>
                        <a target="_blank" href="https://github.com/xuya227939/corki-ui/tree/master/src/components/VerificationCode">How to use</a>
                    </fieldset>
                </div>
            </div>
        );
    }
}

export default Index;