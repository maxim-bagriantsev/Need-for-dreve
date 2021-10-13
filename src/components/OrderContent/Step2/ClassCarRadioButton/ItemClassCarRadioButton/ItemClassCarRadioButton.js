import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {postCategory, postOrder} from "../../../../../api/api";
import {useHistory} from "react-router-dom";


export const ItemClassCarRadioButton = (props) => {

    const dispatch = useDispatch()

    const {
        selectedCategory,
    } = useSelector((state) => {
        return state.reducerData
    })

    const hendleChangeColor = () => {
        dispatch({type: 'SELECT_CLASS_CAR', payload: props.text})

        // const categoryName = {
        //     name: "Эконом+",
        //     description: "Комфортные машины среднего класса"
        // }
        // postCategory(categoryName)
        //     .then(response => {
        //         dispatch({type: 'GET_CATEGORY', payload: response.data})
        //     })
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

