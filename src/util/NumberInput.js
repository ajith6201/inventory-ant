import { React } from 'react';
import { InputNumber, Form  } from 'antd';

const NumberInput= (props) =>{
    return(
        <Form.Item
        label={props.label}
        name={props.name}
        rules={[{ required: true, message: `Please input ${props.label}!` }]}                      
        >
            <InputNumber min={1} max={1000} />
        </Form.Item>
    );
};

export default NumberInput;