import React from 'react';
import {useDispatch, useSelector} from "react-redux";

export const CardCar = (props) => {

    const dispatch = useDispatch()

    const selectedCar = useSelector((state) => {
        return state.reducerData.selectedCar
    })

    const hendleChengeCar = () => {
        dispatch({type: 'SELECT_CAR', payload: props.name}) // марка авто
        dispatch({type: 'PRICE_MIN', payload: props.priceMin}) //минимальная цена авто
        dispatch({type: 'PRICE_MAX', payload: props.priceMax}) // максимальная цена авто
        dispatch({type: 'COLORS-CAR', payload: props.colors}) // доступные цвета
        dispatch({type: 'REGISTER-SING', payload: props.registerSign}) // регистрационный знак
        dispatch({type: 'IMAGE-SELECT_CAR', payload: props.imageCar}) // Картинка
        dispatch({type: 'SELECT_CAR_ID', payload: props.carId}) // Id машины
    }

    return (
        <div onClick={hendleChengeCar} className='item-car' key={props.carId}>
            <div className='item-car-info'>
                <h3 className='title-modelCar'>{props.name}</h3>
                <div className='info-car-price'>
                    <p className='price-car'>{props.priceMin}</p>
                    <span className='price-car-separator'> - </span>
                    <p className='price-car'>{props.priceMax} ₽</p>
                </div>
            </div>
            <img
                className='cars-item'
                src={props.imageCar}
            />
        </div>
    )
};

