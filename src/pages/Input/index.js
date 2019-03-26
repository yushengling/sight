import React,{ Component } from 'react';
// import { Button } from 'corki-ui';
import './index.less';
class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <input
                autocomplete="on"
                autofocus="true"
                checked="true"
                disabled="true"
            />
        );
    }
}

export default Input;