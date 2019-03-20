import React,{ Component } from 'react';
import { Card, Icon, Skeleton } from 'antd';
import './ItemCard.less';
const { Meta } = Card;

function ItemCard(props) {
  const { title, small, href, history } = props;
  return (
    <article className="card" onClick={() => goPage(history, href)}>
      <div className="card-warpper">
        <div className="card-content">
          <h3 className="card-title">{ title }</h3>
          <small>{ small }</small>
        </div>
      </div>
    </article>
  );
}

function goPage(history, href) {
  history.push(href);
}
export default ItemCard;
