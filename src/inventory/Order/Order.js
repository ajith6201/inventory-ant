import React from 'react';
import { Row, Col, Form, Input, Button, Space, DatePicker, InputNumber, Select, Divider } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";


const Order = () =>{

  const { Option } = Select;

   const emptyOrder = {
    order_date:'',
    client_name:'',
    client_contact:'',
    orders:[{
    bar_code: '',
    product_code:'',
    quantity: '', 
    discount: '',
    total: '', 
    rate: '',
    sub_amount: '', 
    grand_total: '',
    gst: '', 
    gst_type: ''}]
  };

    
   const onFinish = (values) => {
    console.log(values);
  };

  function onChange(date, dateString) {
    console.log(date, dateString);
  }

  function handleChange(value) {
    console.log(`selected ${value}`);
    }

    return(<div>
          <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={emptyOrder}
          onFinish={onFinish}                         
          autoComplete="off">
      <Row>
        <Col span={22}>

            <Form.Item name="order_date" label="Order Date">             
                <DatePicker style={{ width: '100%' }} onChange={onChange} />              
            </Form.Item>
            <Form.Item
              label="Client Name"
              name="client_name"
              rules={[{ required: true, message: 'Please input client name!' }]}                      
              >
                  <Input />
              </Form.Item>
            <Form.Item
              label="Client Contact"
              name="client_contact"
              rules={[{ required: true, message: 'Please input client contact!' }]}                      
              >
                  <Input />
            </Form.Item>
            </Col>
            </Row>
            
              <Form.List name="orders" initialValue={emptyOrder.orders}>
              {(fields, { add, remove }) => (
                <>
                {fields.map((field)=>(
                    <Space
                    key={field.key}
                    direction="vertical"
                    style={{ display: "flex", marginBottom: 8 }}>
                      
                      <Row>
                      <Divider/>
                        <Col span={4}>
                          <Form.Item
                            {...field}
                            name={[field.name, "bar_code"]}
                            fieldKey={[field.fieldKey, "bar_code"]}>
                              <Input placeholder="BarCode" />
                          </Form.Item>
                        </Col>
                        <Col span={4}>
                          <Form.Item
                            {...field}
                            name={[field.name, "product_code"]}
                            fieldKey={[field.fieldKey, "product_name"]}>
                              <Input placeholder="Product" />
                          </Form.Item>
                        </Col>
                        <Col span={3}>
                          Available Quantity
                        </Col>
                        <Col span={3}>
                          <Form.Item
                            {...field}
                            name={[field.name, "quantity"]}
                            fieldKey={[field.fieldKey, "quantity"]}>
                              <InputNumber placeholder="Quantity" />
                          </Form.Item>
                        </Col>
                        <Col span={3}>
                          <Form.Item
                            {...field}
                            name={[field.name, "discount"]}
                            fieldKey={[field.fieldKey, "discount"]}>
                              <InputNumber placeholder="Discount" />
                          </Form.Item>
                        </Col>
                        <Col span={3}>
                          <Form.Item
                            {...field}
                            name={[field.name, "total"]}
                            fieldKey={[field.fieldKey, "total"]}>
                              <InputNumber placeholder="Total" />
                          </Form.Item>
                        </Col>
                        <Col span={3}>
                          <Form.Item
                            {...field}
                            name={[field.name, "rate"]}
                            fieldKey={[field.fieldKey, "rate"]}>
                              <InputNumber placeholder="rate" />
                          </Form.Item>
                        </Col>
                        <Col span={1}>
                          <MinusCircleOutlined onClick={() => remove(field.name)} />
                        </Col>
                      </Row>
                      <Row>
                        <Col span={12}>
                          <Form.Item
                            label="Sub Total"
                            {...field}
                            name={[field.name, "sub_amount"]}
                            fieldKey={[field.fieldKey, "sub_amount"]}>
                              <InputNumber style={{ width: '100%' }}  placeholder="Sub Amount" />
                          </Form.Item>
                        </Col>
                        <Col span={12}>
                          <Form.Item
                              label="Grand Total"
                              {...field}
                              name={[field.name, "grand_total"]}
                              fieldKey={[field.fieldKey, "grand_total"]}>
                                <InputNumber style={{ width: '100%' }} placeholder="Grand Total" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                          <Form.Item
                              label="GST"
                              {...field}
                              name={[field.name, "gst"]}
                              fieldKey={[field.fieldKey, "gst"]}>
                                <InputNumber style={{ width: '100%' }} placeholder="GST" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                          <Form.Item
                              label="GST Type"
                              {...field}
                              name={[field.name, "gst_type"]}
                              fieldKey={[field.fieldKey, "gst_type"]}>
                                <Select  onChange={handleChange}>
                                    <Option value="gst">GST</Option>
                                    <Option value="non-gst">Non-GST</Option>                                            
                                </Select>
                            </Form.Item>
                        </Col>
                      </Row>
                  </Space>
                  
                  ))}
                  <Form.Item>
                   <Button
                     type="dashed"
                     onClick={() => add()}
                     block
                     icon={<PlusOutlined />}
                   >
                     Add item
                   </Button>
                 </Form.Item>
                 </>
               )}
              </Form.List>
            
            
            <Form.Item>
          <Button type="primary" htmlType="submit">
            {" "}
            Save{" "}
          </Button>
        </Form.Item>
          </Form>
        
      
    </div>);
};

export default Order;