import React, { PureComponent } from 'react';
import { Row, Col } from 'antd';
import './LayoutHead.less';

class LayoutHead extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <nav className="header-nav">
                <Row className="row header-nav-row">
                    <Col className="header-nav-col" span={24}>
                        <div className="col-abount">
                            关于
                        </div>
                    </Col>
                </Row>
            </nav>
        );
    }
}

export default LayoutHead;
