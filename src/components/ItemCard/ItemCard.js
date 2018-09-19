import React,{ Component } from 'react';
import './ItemCard.css';
function ItemCard(props) {
  const { list, cardClick } = props;
  return (
    <div className="card" onClick={cardClick}>
      <img alt="src" src={list.src} onClick={cardClick} className="image" />
    </div>
  );
}
export default ItemCard;
