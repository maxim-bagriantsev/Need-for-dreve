import React from 'react';
import './step3.scss'
import {RadioButton} from "./RadioButton";
import {SelectDate} from "./SelectDate";

export const Step3 = () => {
    return (
        <div className='step-three'>
            <div className='collor-select'>
                <p>Цвет</p>
                <RadioButton/>
            </div>
            <div className='date-select'>
                <p>Дата аренды</p>
                <div className='start-date'>
                    <p>С</p>
                    <SelectDate/>
                </div>
                <div className='end-date'>
                    <p>По</p>
                    <SelectDate/>
                </div>
            </div>
            <div className='select-tariff'>
                <p>Тариф</p>
                <RadioButton/>
            </div>
            <div className='select-additional-services'>
                <p>Доп услуги</p>
                <RadioButton/>
            </div>
        </div>
    )
}