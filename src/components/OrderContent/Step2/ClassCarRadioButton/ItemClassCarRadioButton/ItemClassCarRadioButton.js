import React from 'react';
import {useDispatch, useSelector} from "react-redux";


export const ItemClassCarRadioButton = (props) => {

    const dispatch = useDispatch()

    const selectedClassCar = useSelector((state) => {
        return state.reducerData.selectedClassCar
    })

    console.log(selectedClassCar)

    const hendleChangeColor = () => {
        dispatch({type: 'SELECT_CLASS_CAR', payload: props.text})
    }

    return (
        <label key={props.id} onClick={hendleChangeColor}>
            <input
                type="radio"
                name="radioCar"
                value="1"
                className="real-radio-btn"
            />
            <span className="custom-radio-btn"/>
            {props.text}
        </label>
    );
};

