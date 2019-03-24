import React,{ Component } from 'react';
import * as PropTypes from 'prop-types';
import './Button.less';
class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { onClick, disabled, children } = this.props;
        return (
            <button className="" onClick={onClick} disabled={disabled}>
                {children}
            </button>
        );
    }
}

Button.propTypes = {
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
};

export default Button;