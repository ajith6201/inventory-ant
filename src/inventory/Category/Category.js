import React,{useState} from 'react';
import CategoryList from './CategoryList';
import { Row, Col, Form, Input, Button, Select  } from 'antd';
import { addCategory } from '../../redux/actions/category-actions/addCategoryAction';
import { useDispatch } from 'react-redux';

const Category = () =>{

    const dispatch = useDispatch();

    const [ select, setSelected ] = useState(1);

    const { Option } = Select;

    const [form] = Form.useForm();

      const onFinish = (values) => {
        //console.log('Success:', values);
        form.resetFields();
        dispatch(addCategory(values));
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

      function handleChange(value) {
        console.log(`selected ${value}`);
      }


    return(<div>
        <Row>
            <Col span={11}>
                    <Form
                    form={form}
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ category: '', status: '' }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}                    
                    autoComplete="off"
                  >
                    <Form.Item
                      label="Category"
                      name="category"
                      rules={[{ required: true, message: 'Please input category!' }]}                      
                    >
                      <Input />
                    </Form.Item>
                    
                    <Form.Item
                      label="Status"
                      name="status"
                      rules={[{ required: true, message: 'Please input status!' }]}                      
                    >
                      <Select value={select}  onChange={handleChange}>
                        <Option value="1">Available</Option>
                        <Option value="0">Not-Available</Option>                                            
                      </Select>
                    </Form.Item>
                    
              
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                      <Button type="primary" htmlType="submit">
                        Submit
                      </Button>
                    </Form.Item>
                  </Form>               
            </Col>
            <Col span={1}></Col>
            <Col span={11}>
                <CategoryList></CategoryList>
            </Col>
        </Row>
    </div>);
};

export default Category;