import React,{ Component } from 'react';
import { Input } from 'corki-ui';
import './index.less';
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="btn-warrper">
                <div className="btn-content"> 
                    <h1>输入框</h1>
                    <fieldset>
                        <div>输入框，基础使用</div>
                        <div className="input-div">
                            <Input
                                className="input"
                                placeholder="Basics Input"
                            />
                            <a target="_blank" href="https://github.com/xuya227939/corki-ui/tree/master/src/components/Input">How to use</a>
                        </div>
                    </fieldset>
                </div>
            </div>
        );
    }
}

export default Index;