import React, { Component } from 'react';
import { Table, Button } from 'antd';
import {data,columns} from './recordData';

// const filtercolumns = [
//   {
//     title: 'Name',
//     dataIndex: 'name'
//   },
//   {
//     title: 'Gender',
//     dataIndex: 'gender'
//   },
//   {
//     title: 'Address',
//     dataIndex: 'address'
    
//   }
// ]; 

// rowSelection object indicates the need for row 
let obj = [];
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log('selectedRowKeys',selectedRowKeys)
    obj = selectedRows;
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows:', selectedRows);
  }
};

class tableData extends Component {
    constructor(){
        super()
        this.state = {
            value: ''
        };
    }
    handleMove = () => {
        this.setState({
            value: obj
        },() =>{
          this.props.gettingValue(this.state.value);
        });
    }
    render() {
        return (
            <div>
              <Button onClick = {this.handleMove} type ="primary">Move Selected</Button>
               <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
               {/* <Table columns={filtercolumns} dataSource={this.state.value} />  */}
            </div>
        )
    }
}

export default tableData;
