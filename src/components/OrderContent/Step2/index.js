import React, {useEffect} from 'react';
import {RadioButton} from "./ClassCarRadioButton";
import {Cars} from './Cars';
import './step2.scss';
import {useDispatch} from "react-redux";

export const Step2 = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: 'SET_CURRENT_ORDER_PAGE', payload: 'SELECT_MODEL_CAR'})
    }, [])

    return (
        <div className='step-two'>
            <RadioButton/>
            <Cars/>
        </div>
    )
}