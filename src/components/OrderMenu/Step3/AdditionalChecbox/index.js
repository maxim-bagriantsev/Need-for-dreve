import React from "react";
import {Checkbox} from 'antd';
import './index.css'


function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
}


export const AdditionalRadioButton = () => {
    return (
        <>
            <div className='checkbox'>
                <div className="form-group">
                    <Checkbox onChange={onChange}>Полный бак, 500р</Checkbox>
                </div>
                <div className="form-group">
                    <Checkbox onChange={onChange}>Детское кресло, 200р</Checkbox>
                </div>
                <div className="form-group">
                    <Checkbox onChange={onChange}>Правый руль, 1600р</Checkbox>
                </div>
            </div>
        </>
    )
}