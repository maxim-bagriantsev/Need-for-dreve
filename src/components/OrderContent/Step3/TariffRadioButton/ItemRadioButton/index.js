import React from 'react';
import {useDispatch, useSelector} from "react-redux";

export const ItemRadioButton = (props) => {

    const dispatch = useDispatch()

    const selectedTariff = useSelector((state) => {
        return state.reducerData.selectedTariff
    })

    const hendleSelectTariff = () => {
        dispatch({type: 'SELECT_TARIFF', payload: props.text})
    }

    return (
        <label onClick={hendleSelectTariff} key={props.id}>
            <input onChange={() => console.log('#')} id={props.id} type="radio" name="radioTariff" value="1"
                   className="real-radio-btn" />
            <span className="custom-radio-btn"/>
            {props.text}
        </label>
    );
};

