import React from 'react';

import {DatePicker, Space} from 'antd';
import 'antd/dist/antd.css';

function onChange(value, dateString) {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
}

function onOk(value) {
    console.log('onOk: ', value);
}
export const SelectDate = ()=>{
    return (
        <Space direction="vertical" size={12}>
            <DatePicker showTime onChange={onChange} onOk={onOk}/>
        </Space>
    )
}


