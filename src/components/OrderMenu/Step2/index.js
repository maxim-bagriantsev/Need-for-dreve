import React from 'react';
import {Radio} from "antd";
import './step2.scss'

const RadioGroup = Radio.Group;

export const RadioButton = () => {
    const [value, setValue] = React.useState(1);

    const onChange = e => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    return (
        <RadioGroup onChange={onChange} value={value}>
            <Radio value={1}>Все модели</Radio>
            <Radio value={2}>Эконом</Radio>
            <Radio value={3}>Премиум</Radio>
        </RadioGroup>
    );
};


export const Step2 = () => {

    return (
        <div>
            <RadioButton
                buttonStyle='solid'
                size='large'
            />
        </div>
    )
}