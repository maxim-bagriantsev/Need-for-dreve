import React from "react";
import {useAllCars} from "../../../../hooks/useAllCars";
import {useSelector} from "react-redux";
import {CardCar} from "./CardCar/CardCar";
import {Spiner} from "../../../../Tools/Spiner/Spiner";
import './cars.scss';

export const Cars = () => {
    useAllCars()

// вытаскиваем данные машин из store
    const cars = useSelector((state) => {
        return state.reducerData.carData
    })

// если данные не загружены показываем спиннер
    if (!cars) {
        return <Spiner/>
    }

    const listCars = cars.map((car, id) => {
        return (
            <CardCar
                car={car}
                carId={id}
                name={car.name}
                priceMin={car.priceMin}
                priceMax={car.priceMax}
            />
        )
    })
    return (
        <div className='all-list-cars'>
            {listCars}
        </div>

    )
}
