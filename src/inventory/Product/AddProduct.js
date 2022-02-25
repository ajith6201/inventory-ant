import React, { useState, useRef, useEffect } from 'react';
import { Row, Col, Form, Input, Button, Select, InputNumber, Upload  } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useDispatch,useSelector } from 'react-redux';
import addProduct from '../../redux/actions/product-actions/addProductAction';
import DropDown from '../../util/DropDown';
import NumberInput from '../../util/NumberInput';


const arrayOfStatus = [
    {id:1,category:'Available'},
    {id:2,category:'Not-Available'}
];

const AddProduct = ()  =>{

    const inputFileRef = useRef();    

    const dispatch = useDispatch();

    const { Option } = Select;
    
    const [ files, setFiles ] = useState([]);


    const arrayOfCategory = useSelector((state) => state.categoriesss.categories);


    const handleUpload = () => {    
        setFiles( {files : inputFileRef.current.fileList[0].originFileObj} );
        //console.log(inputFileRef.current.fileList[0].originFileObj);
      };


    const onFinish = (values) => {         

         const formData = new FormData();
            formData.append("categories_id", values.category);
            formData.append("net_rate", values.net_rate);
            formData.append("product_name", values.product_name);
            formData.append("quantity", values.quantity);
            formData.append("sale_rate", values.sale_rate);
            formData.append("status", values.status);
            formData.append("file", inputFileRef.current.fileList[0].originFileObj);
       
        //const finalResult = Object.assign(values,files);
        //values["uploaded_file"] = files; 
        console.log('new object',formData);
        dispatch(addProduct(formData));
    };

    const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    };

    function handleChange(value) {
       
        console.log(`selected ${value}`);
        
       
    }


    return(<div>
            <Row>
                <Col span={20}>
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ 
                            product_name:'',
                            quantity:0,
                            sale_rate:0,
                            net_rate:0,
                            category: '', 
                            uploaded_file:[],
                            status: 'available' }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}                    
                        autoComplete="off">
                            <Form.Item
                            label="Product Name"
                            name="product_name"
                            rules={[{ required: true, message: 'Please input product name!' }]}                      
                            >
                                <Input />
                            </Form.Item>
                            
                            <NumberInput name='quantity' label='Quantity'/>

                            <NumberInput name='sale_rate' label='Sale Rate'/>
                       
                            <NumberInput name='net_rate' label='Net Rate'/>

                            <DropDown name="category" label="Category" arrayOfData={arrayOfCategory} selectOnChange={handleChange}/>
                               
                            <DropDown name="status" label="Status" arrayOfData={arrayOfStatus} selectOnChange={handleChange}/>
                            

                            <Form.Item label="Choose Image">
                                <Upload 
                                ref={inputFileRef}
                                onChange={handleUpload}
                                beforeUpload={() => false}>
                                    <Button icon={<UploadOutlined />}>Upload</Button>
                                </Upload>
                            </Form.Item>                            
                            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                    </Form>
                </Col>
            </Row>
    </div>);
};

export default AddProduct;