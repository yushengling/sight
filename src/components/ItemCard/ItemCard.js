/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { Col } from 'antd';
import './ItemCard.less';

function goPage(history, href) {
    history.push(href);
}

export default function ItemCard(props) {
    const { title, small, href, history } = props;
    const test = { xs: 24, sm: 16, md: 14, lg: 6 };
    return (
        <Col {...test}>
            <article
                className="card"
                onClick={() => goPage(history, href)}
            >
                <div className="card-warpper">
                    <div className="card-content">
                        <h3 className="card-title">{title}</h3>
                        <small>{small}</small>
                    </div>
                </div>
            </article>
        </Col>
    );
}
