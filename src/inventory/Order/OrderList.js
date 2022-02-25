import React from 'react';
import { Table, Tag, Space } from 'antd';
import {
    EditOutlined,
    DeleteOutlined
  } from '@ant-design/icons';
class OrderList extends React.Component{


    
    componentDidMount()
    {
        console.log("yes mounted");
    }
    render() {
        const columns = [
            {
                title: 'Order Date',
                dataIndex: 'order_date',
                key: 'order_date'              
            },
            {
                title: 'Client Name',
                dataIndex: 'client_name',
                key: 'client_name'              
            },
            {
                title: 'Contact',
                dataIndex: 'contact',
                key: 'contact'              
            },
            {
                title: 'Total order item',
                dataIndex: 'total_item',
                key: 'total_item'              
            },
            {
                title: 'Grand Total',
                dataIndex: 'grand_total',
                key: 'grand_total'              
            },            
            {
                title: 'Action',
                key: 'action',
                render: (text, record) => (
                  <Space size="middle">
                    <a><EditOutlined /> </a>
                    <a><DeleteOutlined /></a>
                  </Space>
                ),
            },
          ];
    
          const data = [
            {
              key: '1',
              order_date: '22-01-2022',
              client_name:'Shambu',
              contact:7846096633,
              total_item:2,
              grand_total:500             
            },
            {
              key: '2',
              order_date: '22-01-2022',
              client_name:'Anbu',
              contact:7846096633,
              total_item:2,
              grand_total:500,      
            }];
        return (<div><Table columns={columns} dataSource={data} /></div>);
      }
}

export default OrderList;