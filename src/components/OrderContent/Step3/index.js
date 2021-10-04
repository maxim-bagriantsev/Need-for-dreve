import React, {useEffect} from 'react';
import {ColorRadioButton} from "./ColorRadioButton";
import { SelectDateStart} from "./SelectDate/selectDateStart";
import {SelectDateEnd} from "./SelectDate/SelectDateEnd";
import {TariffRadioButton} from "./TariffRadioButton";
import {AdditionalServices} from "./AdditionalCheckbox";
import './step3.scss';
import {useDispatch} from "react-redux";

export const Step3 = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: 'SET_CURRENT_ORDER_PAGE', payload: 'SELECT_ADDITIONAL'})
    }, [])

    return (
        <div className='step-three'>
            <div className='color-select'>
                <p className='item-color'>Цвет</p>
                <ColorRadioButton/>
            </div>
            <div className='date-select'>
                <p>Дата аренды</p>
                <div className='start-date'>
                    <span>С</span>
                    <SelectDateStart/>
                </div>
                <div className='end-date'>
                    <span>По</span>
                    <SelectDateEnd/>
                </div>
            </div>
            <div className='select-tariff'>
                <span>Тариф</span>
                <div className='radio-btn-group'>
                    <TariffRadioButton/>
                </div>
            </div>
            <div className='select-additional-services'>
                <span>Доп услуги</span>
                <div className='radio-btn-group'>
                    <AdditionalServices/>
                </div>
            </div>
        </div>
    )
}