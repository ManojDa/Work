import React from 'react';
import { Table, Drawer, Button, Icon } from 'antd';
import 'antd/dist/antd.css';
import TableData from './table';

const filtercolumns = [
  {
    title: 'Name',
    dataIndex: 'name'
  },
  {
    title: 'Gender',
    dataIndex: 'gender'
  },
  {
    title: 'Address',
    dataIndex: 'address'
    
  }
];

class drawer extends React.Component {
  state = 
  { 
  visible: false,
  selectedValues : [] 
  };
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  gettingValue = Values => {
    this.state.selectedValues = Values;
    console.log('Values', Values);
  }
  render() {
    return (
      <div style={{
        height: '100vh',
        overflow: 'hidden',
        border: '1px solid #ebedf0',
        borderRadius: 2,
        padding: 20,
        background: '#fafafa',
      }}>
        <Button type="primary" onClick={this.showDrawer}>
        <Icon type="menu" />
        </Button>
        <Table columns={filtercolumns} dataSource = {this.state.selectedValues}/> 
        <Drawer
          title=" VBTS Employee Details"
          width={720}
          maskClosable = {false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <TableData
            gettingValue={this.gettingValue}
          />
        </Drawer>
      </div>
    );
  }
}

export default drawer;