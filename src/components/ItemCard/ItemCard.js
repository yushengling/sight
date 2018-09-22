import React,{ Component } from 'react';
import { Card, Icon } from 'antd';
import './ItemCard.css';
const { Meta } = Card;

const Icons = ['like', 'heart', 'share-alt'];
function ItemCard(props) {
  const { list } = props;
  return (
    <article className="card">
      <header className="card-header">
        <span className="card-header-avatar"><img alt="avatar" src="https://scontent-hkg3-1.cdninstagram.com/vp/dcd03f20a1b867635910cdd8f755ced8/5C3F0B04/t51.2885-19/s150x150/32178164_2124523824446183_6597680605494771712_n.jpg" /></span>
        <span className="card-header-name">123</span>
      </header>
      <img className="card-img" alt="src" src={list.src} />
      <section className="card-body">
        <section className="card-body-section">
          {
            Icons.map((icon, index) => {
              return (
                <span key={index}>
                  <Icon className={'card-' + icon} type={icon} theme="outlined" />
                </span>
              )
            })
          }
        </section>
        <section className="card-body-total">
          0次赞
        </section>
        <li className="card-body-li">
          <a>test：</a>
          <span>213123</span>
        </li>
        <section className="card-footer">
          <textarea className="card-footer-textarea" placeholder="添加评论..." style={{ height: '18px' }}></textarea>
        </section>
      </section>
    </article>
  );
}
export default ItemCard;
