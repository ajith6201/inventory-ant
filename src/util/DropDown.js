import React from 'react';
import { Select, Form  } from 'antd';

const DropDown= (props) =>{

    const { Option } = Select;

    console.log(props);

    const handleChange=(value) =>
    {        
        
        props.selectOnChange(value);
    }

    var dropdownOptions = props.arrayOfData.map((data)=>{ 
       return( <Option 
        key={data.id}
        value={data.id}>
            {data.category}
        </Option>);
    });



    return(
        <Form.Item
        label={props.label}
        name={props.name}
        rules={[{ required: true, message: `Please input ${props.label}!` }]}                      
        >
            <Select onChange={handleChange}>
                {dropdownOptions}
            </Select>   
        </Form.Item>
 
    );
}

export default DropDown;