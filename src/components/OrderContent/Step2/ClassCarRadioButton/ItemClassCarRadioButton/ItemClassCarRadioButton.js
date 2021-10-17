import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getFilterCategory} from "../../../../../api/api";

export const ItemClassCarRadioButton = (props) => {

    const dispatch = useDispatch()

    const {
        selectedCategoryId,
    } = useSelector((state) => {
        return state.reducerData
    })

    const hendleChangeClass = () => {
        dispatch({type: 'SELECT_CLASS_CAR', payload: props.text})
        dispatch({type: 'SELECT_CLASS_CAR_ID', payload: props.id})

        getFilterCategory(selectedCategoryId)
            .then(response => {
                dispatch({type: 'GET_FILTER_CATEGORY_CARS', payload: response.data.data})
            })
    }

    return (
        <label key={props.id} onClick={hendleChangeClass}>
            <input
                type="radio"
                name="radioCar"
                value="1"
                className="real-radio-btn"
                checked={props.isChecked}
                onChange={props.onChange}
            />
            <span className="custom-radio-btn"/>
            {props.text}
        </label>
    );
};

