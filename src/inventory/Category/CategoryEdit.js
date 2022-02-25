import React, {useState, forwardRef} from 'react';
import { Row, Col, Form, Input, Button, Select, Modal  } from 'antd';
import { useDispatch } from 'react-redux';
import { updateCategory } from '../../redux/actions/category-actions/updateCategoryAction';
import {  EditOutlined} from '@ant-design/icons';

const CategoryEdit = (props, ref) =>
{
  
    const dispatch = useDispatch();

    const { Option } = Select;

    const [isModalVisible, setIsModalVisible] = useState(false);

    const [ id, setId ] = useState(props.category.id);

    function handleChange(value) { 
        console.log(`selected ${value}`);
      }

    const onFinish = (values) => {      
        dispatch(updateCategory(id,values));
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

      

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
    
    return(<div>
        <Row>
            <Col span={22}>
            <EditOutlined ref={ref} onClick={showModal}></EditOutlined>
            <Modal animation={false} title="Basic Modal" 
            visible={isModalVisible} 
            onOk={handleOk} 
            onCancel={handleCancel}
            footer={[
              <Button form="editForm" key="submit" onClick={handleCancel} htmlType="submit">
                  Submit
              </Button>
              ]}
            >
            <Form
                    name="editForm"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ id:props.category.id, category: props.category.category, status: props.category.status }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}                    
                    autoComplete="off"
                  >
                        <Form.Item
                        label="Category"
                        name="category"                                                                   
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                        label="Status"
                        name="status"                                             
                        >
                        <Select  onChange={handleChange}>
                            <Option value="1">Available</Option>
                            <Option value="0">Not-Available</Option>                                            
                        </Select>
                        </Form.Item>
                      </Form>
      </Modal>

            </Col>
        </Row>
    </div>);
}

export default forwardRef(CategoryEdit);