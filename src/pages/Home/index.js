import React, { Component } from 'react';
import { Row } from 'antd';
import { connect } from 'react-redux';
import LayoutFooter from '../../components/Layout/LayoutFooter.js';
import LayoutHead from '../../components/Layout/LayoutHead.js';
import ItemCard from '../../components/ItemCard/ItemCard.js';
import * as action from '../../actions/HomeAction';
import './index.less';

const mapStateToProps = state => {
    return state;
};
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listData: []
        };
    }

    componentDidMount() {
        const { dispatch } = this.props;
        action.getCard(dispatch);
    }

    static getDerivedStateFromProps(nextProps) {
        const { homeRedu } = nextProps;
        let listData = [];
        if(homeRedu.card.type) {
            if(!homeRedu.card.isLoading) {
                if(homeRedu.card.payload.code === 200) {
                    listData = homeRedu.card.payload.listData;
                }
            }
        }
        return {
            listData
        };
    }

    render() {
        const { history } = this.props;
        const { listData } = this.state;
        return (
            <section className="home-section">
                <LayoutHead />
                <div className="home-wrapper">
                    <div className="home-title">
                        <h2>corki-ui</h2>
                        <p>以下是目前开源的组件</p>
                    </div>
                    <Row className="home-card">
                        {
                            listData.map(item => {
                                return (
                                    <ItemCard
                                        key={item.id}
                                        title={item.title}
                                        small={item.small}
                                        href={item.href}
                                        history={history}
                                    />
                                );
                            })
                        }
                    </Row>
                </div>
                <LayoutFooter />
            </section>
        );
    }
}

export default connect(mapStateToProps)(Index);
