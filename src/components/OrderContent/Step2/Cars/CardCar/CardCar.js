import React from 'react';
import {useDispatch, useSelector} from "react-redux";

export const CardCar = (props) => {

    const dispatch = useDispatch()

    const selectedCar = useSelector((state) => {
        return state.reducerData.selectedCar
    })



    const hendleChengeCar = () => {
        dispatch({type: 'SELECT_CAR', payload: props})
    }

    return (
        <div onClick={hendleChengeCar} className='item-car' key={props?.id}>
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
                src={
                    props.car?.thumbnail?.path.includes('base64')
                        ? props.car?.thumbnail?.path
                        : 'https://api-factory.simbirsoft1.com' + props.car?.thumbnail?.path
                }
            />
        </div>
        // <div className='item-car' key={props.car?.id}>
        //     <div className='item-car-info'>
        //         <h3 className='title-modelCar'>{props.car.name}</h3>
        //         <div className='info-car-price'>
        //             <p className='price-car'>{props.car.priceMin}</p>
        //             <span className='price-car-separator'> - </span>
        //             <p className='price-car'>{props.car.priceMax} ₽</p>
        //         </div>
        //     </div>
        //     <img
        //         className='cars-item'
        //         src={
        //             props.car?.thumbnail?.path.includes('base64')
        //                 ? props.car?.thumbnail?.path
        //                 : 'https://api-factory.simbirsoft1.com' + props.car?.thumbnail?.path
        //         }
        //     />
        // </div>
    )
};

