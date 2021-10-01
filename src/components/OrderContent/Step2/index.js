import React from 'react';
import {RadioButton} from "./ClassCarRadioButton";
import {Cars} from './Cars';
import './step2.scss';

export const Step2 = () => {
    return (
        <div className='step-two'>
            <RadioButton/>
            <Cars/>
        </div>
    )
}