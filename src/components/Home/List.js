import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Menu, Table, Divider, Icon } from 'antd';
import './List.css';

const data = [{
  name: 'John Brown',
  price: 32,
  name2: 'aaa',
  price2: 32
}, {
  name: 'Jim Green',
  price: 32,
  name2: 'aaa',
  price2: 32
}, {
  name: 'Joe Black',
  price: 32,
  name2: 'aaa',
  price2: 32
}];

const columns = [{
  title: 'Room name',
  dataIndex: 'name'
}, {
  title: 'Price(per week)',
  dataIndex: 'price'
}, {
  title: 'Room name',
  dataIndex: 'name2'
}, {
  title: 'Price(per week)',
  dataIndex: 'price2'
}];

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  componentWillReceiveProps(nextProps) {
    
  }
  componentDidMount() {

  }
  render() {
    return (
      <div>
        <h1 style={{ marginBottom: 0 }}>Property List</h1>
        <div className="list-table">
          <div className="list-table-title">
            Property 1
          </div>
          <Table
            columns={columns}
            style={{ marginTop: 20 }}
            dataSource={data}
            pagination={false}
          />
        </div>
      </div>
    );
  }
}
function mapStateToProps(state,oWnprops) {
  return state;
}
export default connect(mapStateToProps)(List);