import React,{ Component } from 'react';
import { Card, Icon, Skeleton } from 'antd';
import './ItemCard.less';
const { Meta } = Card;
const Icons = ['like', 'heart', 'share-alt'];

function ItemCard(props) {
  const { list, renderImages } = props;
  return (
    <article className="card">
      <header className="card-header">
        <span className="card-header-avatar">
          <img alt="avatar" src={list.avatar} />
        </span>
        <span className="card-header-name">{list.name}</span>
      </header>
      <img className="card-img" alt="src" src={list.src} />
      <section className="card-body">
        <section className="card-body-section">
          {
            Icons.map((icon, index) => {
              return (
                <span key={index}>
                  <Icon className={'card-body-section-' + icon} type={icon} theme="outlined" />
                </span>
              )
            })
          }
        </section>
        <section className="card-body-total">
          {list.like}次赞
        </section>
        <p className="card-body-comment">加载更多评论</p>
        <li className="card-body-li">
          <a>test：</a>
          <span>213123</span>
        </li>
        <section className="card-body-footer">
          <textarea className="card-body-footer-textarea" placeholder="添加评论..." style={{ height: '18px' }}></textarea>
        </section>
      </section>
    </article>
  );
}
export default ItemCard;
