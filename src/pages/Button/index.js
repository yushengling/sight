import React,{ Component } from 'react';
import { Button } from 'corki-ui';
import './index.less';
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    onClick = (e) => {
        console.log(e);
    }

    render() {
        return (
            <div className="btn-warrper">
                <div className="btn-content"> 
                    <h1>按钮</h1>
                    <fieldset>
                        <div className="btn-describe">支持不同颜色展示</div>
                        <div className="btn-btns">
                            <Button
                                onClick={this.onClick}
                                className="btn"
                            >
                                default
                            </Button>
                            <Button
                                onClick={this.onClick}
                                type="primary"
                                className="btn"
                            >
                                primary
                            </Button>
                            <Button
                                onClick={this.onClick}
                                disabled
                                className="btn"
                            >
                                disabled
                            </Button>
                            <Button
                                onClick={this.onClick}
                                type="danger"
                                className="btn"
                            >
                                danger
                            </Button>
                            <a target="_blank" href="https://github.com/xuya227939/corki-ui/tree/master/src/components/Button">How to use</a>
                        </div>
                    </fieldset>
                </div>
            </div>
        );
    }
}

export default Index;