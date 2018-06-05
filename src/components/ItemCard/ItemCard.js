import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Icon, Avatar, Card, Col } from 'antd';
import './ItemCard.css';
const { Meta } = Card;
class ItemCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { index, list, collection, like } = this.props;
    return (
      <div className="card">
        <Card
          key={"card" + index}
          hoverable
          cover={<img alt="src" src={list.src} className="image" />}
          actions={[
            <div onClick={collection}>
              { list.userCollection ? <Icon type='star' style={{ marginRight: 8, color: 'red' }} /> : <Icon type='star' style={{ marginRight: 8 }} /> }
              {list.collection}
            </div>,
            <div onClick={like}>
              { list.userLikes ? <Icon type='like' style={{ marginRight: 8, color: 'yellow' }} /> : <Icon type='like' style={{ marginRight: 8 }} /> }
              {list.likes}
            </div>
          ]}
        >
          <Meta
            avatar={<Avatar src={list.avatar} />}
            title={list.userName}
            description={list.desc}
          />
        </Card>
      </div>
    );
  }
}
function mapStateToProps(state,oWnprops) {
  return state;
}
export default connect(mapStateToProps)(ItemCard);
