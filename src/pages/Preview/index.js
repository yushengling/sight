import React, { Component } from 'react';
import { Preview } from 'corki-ui';
import './index.less';
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowPreView: false
        }
    }

    showPreview = () => {
        this.setState({
            isShowPreView: true
        });
    }

    onClose = () => {
        this.setState({
            isShowPreView: false
        });
    }

    render() {
        const { isShowPreView } = this.state;
        return (
            <div className="preview-wrapper">
                <div className="preview-content">
                    <h1>图片预览</h1>
                    <fieldset>
                        <legend>可缩小、放大、拖拽。</legend>
                        <button className="preview-btn" onClick={this.showPreview}>preview</button>
                        <a target="_blank" href="https://github.com/xuya227939/corki-ui/tree/master/src/components/Preview">How to use</a>
                    </fieldset>
                </div>
                {
                    isShowPreView &&
                    <Preview
                        url="https://img.downfuture.com/13026877921/9y-PLogxmyJudmV23z9HgbPX.jpeg"
                        onClose={this.onClose}
                    />
                }
            </div>
        );
    }
}

export default Index;