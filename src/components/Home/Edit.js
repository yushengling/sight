import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Table, Icon, Input, Tooltip } from 'antd';
import './Edit.css';
const datas = [
  {
    name: '1'
  },
  {
    name: '2'
  }
]

const data = [{
  name: 'John Brown',
  price: 32,
  actions: 'aaa'
}, {
  name: 'Jim Green',
  price: 32,
  actions: 'aaa'
}, {
  name: 'Joe Black',
  price: 32,
  actions: 'aaa'
}];

const columns = [{
  title: 'Room name',
  dataIndex: 'name',
  width: '68%'
}, {
  title: 'Price(per week)',
  dataIndex: 'price'
}, {
  title: 'Actions',
  dataIndex: 'actions'
}];
class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }
  componentWillReceiveProps(nextProps) {
    
  }
  componentDidMount() {
    document.body.onclick = function (e) {
      console.log(e);
    }
  }
  add = () => {

  };
  renderTab() {
    let lists = datas.map((list, index) => {
      return (
        <div className="edit-content-tab">
          Property {++index}
        </div>
      )
    });
    return lists;
  }
  showTip = () => {
    this.setState({
      visible: !this.state.visible
    });
  }
  render() {
    const { visible } = this.state;
    return (
      <div>
        <div className="edit-head">
          <h1 style={{ marginBottom: 0 }}>Edit Properties</h1>
          <div className="add-property-button" onClick={ this.addProperty }>Add new property</div>
        </div>
        <div className="edit-content">
          <div className="edit-content-left">
            { this.renderTab() }
          </div>
          <div className="edit-content-right">
            <h4 className="edit-content-right-price">Price</h4>
            <Table
              columns={columns}
              style={{ marginTop: 20 }}
              dataSource={data}
              pagination={false}
            />
            <div className="edit-content-right-input">
              <div className="edit-content-right-input-div">
                <Input placeholder="Room name"  className="edit-content-right-input-name" />
                <Input placeholder="Price"  suffix={<Tooltip trigger="click" onClick={this.showTip}  visible={visible} title="Price are based with currency { currenty }"><Icon className="edit-content-right-input-price-icon" /></Tooltip>}  className="edit-content-right-input-price" />
              </div>
              <div className="add-button" onClick={ this.add }>Add</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state,oWnprops) {
  return state;
}
export default connect(mapStateToProps)(Edit);