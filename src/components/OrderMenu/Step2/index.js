import React from 'react';
import {RadioButton} from "./RadioBatton";
import './step2.scss'
import {Cars} from './Cars'


export const Step2 = () => {
    return (
        <div className='step-two'>
            <div>
                <RadioButton/>
            </div>
            <Cars/>
        </div>
    )
}