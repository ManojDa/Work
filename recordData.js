import React from 'react';
import { Button } from 'antd';
// import handleMove from './table';

export const columns =
 [
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
    },
    {
      title: 'Action',
      dataIndex: 'operation',
      render: () => <Button>Add</Button>
      // render: (record) => {
      //   console.log('record',record);
      //   return(<div><Button onClick = {handleMove('record')}>Add</Button></div>)
      // }
    }
 ];

export const data = [
    {
      key: '1',
      name: 'Sirishnadh',
      gender: 'Male',
      address: 'Kakinada'
    },
    {
      key: '2',
      name: 'Manoj',
      gender: 'Male',
      address: 'Hyderabad'
    },
    {
      key: '3',
      name: 'Sandeep',
      gender: 'Male',
      address: 'Khammam'
    },
    {
      key: '4',
      name: 'Praveen',
      gender: 'Male',
      address: 'Hyderabad'
    },
    {
      key: '5',
      name: 'Suma',
      gender: 'Female',
      address: 'Palakolle'
    },
    {
      key: '6',
      name: 'Rajeswari',
      gender: 'Female',
      address: 'Kurnool'
    },
    {
      key: '7',
      name: 'Jyothi',
      gender: 'Female',
      address: 'Kakinada'
    },
  ];

