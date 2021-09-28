import React from 'react';
import {Checkbox} from "antd";
import {useDispatch} from "react-redux";
import {babyChair} from '../additionalServices.constans'

export const BabyChairCheckbox = () => {

    const dispatch = useDispatch()


    const hendleSelectBabyChair = (event) => {

        dispatch({type: 'SELECT_BABY_CHAIR', payload: event.target.checked})
    }

    return (
        <div className="form-group">
            <Checkbox onChange={hendleSelectBabyChair}>{babyChair}</Checkbox>
        </div>
    );
};

