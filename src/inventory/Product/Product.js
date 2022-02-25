import React , { useEffect } from 'react';
import { Table, Space } from 'antd';
import {
    EditOutlined,
    DeleteOutlined
  } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../redux/actions/product-actions/fetchProductAction';

const Product = () => {

    const dispatch = useDispatch();
    const arrayOfProducts = useSelector((state)=>state.productsss.products[0]);

      useEffect(()=>{
        dispatch(fetchProduct());
      },[]);

   
        const columns = [
            {
                title: 'Product Name',
                dataIndex: 'product_name',
                key: 'product_name'                
            },
            {
                title: 'Quantity',
                dataIndex: 'quantity',
                key: 'quantity'                
            },
            {
                title: 'Sale Rate',
                dataIndex: 'sale_rate',
                key: 'sale_rate'                
            },
            {
                title: 'Net Rate',
                dataIndex: 'rate',
                key: 'rate'                
            },
            {
              title: 'Category',
              dataIndex: 'categories_id',
              key: 'categories_id'              
            },
            {
              title: 'Status',
              dataIndex: 'status',
              key: 'status',
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
              product_name:'Jeans',
              quantity:23,
              sale_rate:255,
              net_rate:400,
              category: 'John Brown',
              status: 32
            },
            {
              key: '2',
              product_name:'Shirt',
              quantity:40,
              sale_rate:300,
              net_rate:500,
              category: 'John Green',
              status: 32      
            }];
        return (<div><Table columns={columns} dataSource={arrayOfProducts} /></div>);
    
}

export default Product;