import React from 'react';
import {useDispatch, useSelector} from "react-redux";

export const ItemRadioButton = (props) => {

    const dispatch = useDispatch()

    const color = useSelector((state) => {
        return state.reducerData.selectedColor
    })

    const hendleChengeColor = () => {
        dispatch({type: 'SELECT_COLOR', payload: props.text})
    }

    return (
        <label onClick={hendleChengeColor}>
            <input
                id={props.id}
                type="radio"
                name="radioColor"
                value="1"
                className="real-radio-btn"/>
            <span className="custom-radio-btn"/>
            {props.text}
        </label>
    );
};

