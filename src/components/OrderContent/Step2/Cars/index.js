import React from "react";
import {cars} from './const';
import './cars.scss';

export const Cars = () => {
    const listCars = cars.map((car, id) => {
        return (
            <div className='item-car' key={id}>
                <div className='item-car-info'>
                    <h3 className='title-modelCar'>{car.model}</h3>
                    <p className='price-car'>{car.price}</p>
                </div>
                <img src={car.img}/>
            </div>
        )
    })
    return (
        <div className='all-list-cars'>
            {listCars}
        </div>

    )
}
