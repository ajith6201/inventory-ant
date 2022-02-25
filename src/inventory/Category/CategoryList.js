import React from 'react';
import { Table, Tag, Space, Modal } from 'antd';
import {
    EditOutlined,
    DeleteOutlined,
    ExclamationCircleOutlined
  } from '@ant-design/icons';
import { connect } from "react-redux";
import { fetchCategories } from '../../redux/actions/category-actions/fetchCategoriesAction';
import { deleteCategories } from '../../redux/actions/category-actions/deleteCategoriesAction';
import CategoryEdit from './CategoryEdit';

class CategoryList extends React.Component{
  
    
  constructor(props)
  {
    super(props); 
    this.ref = React.createRef();   
  }
    
    componentDidMount()
    {
        console.log("yes mounted");
        this.props.fetchCategories();
    }
    render() {
      const { categories } = this.props;
      
      const handleCategoryDelete=(record)=>
      {       
        Modal.confirm({
          title: 'Are you sure delete this Category?',
          icon: <ExclamationCircleOutlined />,
          content: 'Deleted the '+record.category,
          okText: 'Yes',
          okType: 'danger',
          cancelText: 'No',
          onOk:() => {
            
            this.props.deleteCategories(record.key);
          },
          onCancel:()=> {
            console.log('Cancel');
          },
        });
      }

            
      //const newCategories = categories.map((item,index)=>{ console.log(item) });

        const columns = [
            {
              title: 'Category',
              dataIndex: 'category',
              key: 'category',
              render: text => <a>{text}</a>,
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
                    <a><CategoryEdit category={record}/></a>
                    <a><DeleteOutlined style={{color:'red'}} onClick={()=>{handleCategoryDelete(record)}}/></a>
                  </Space>
                ),
            },
          ];

          const data = categories.categories;

        return (<div><Table columns={columns} dataSource={data} /></div>);
      }
      
}
const mapStateToProps = (state) => {
  return {
    categories: state.categoriesss,
  };
};

export default connect(mapStateToProps,{fetchCategories,deleteCategories})(CategoryList);