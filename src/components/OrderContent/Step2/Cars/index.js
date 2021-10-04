import React, {useMemo} from "react";
import {useAllCars} from "../../../../hooks/useAllCars";
import {useSelector} from "react-redux";
import {CardCar} from "./CardCar/CardCar";
import {Spiner} from "../../../../Tools/Spiner/Spiner";
import './cars.scss';

export const Cars = () => {
    useAllCars() // заранее загружаем машины

// вытаскиваем данные машин из store
    const {
        selectedClassCar,
        cars
    } = useSelector((state) => {
        return {
            selectedClassCar: state.reducerData.selectedClassCar,
            cars: state.reducerData.carData
        }
    })

    // =================фильтр машин по классу=============================//
    const classCarFiltered = useMemo(() => {
        if (selectedClassCar === null) {
            return cars
        } else if (selectedClassCar) {
            return cars.filter(fileteCar => {
                if (selectedClassCar === fileteCar.categoryId?.name) {
                    return fileteCar.categoryId?.name
                } else if (selectedClassCar === 'Все модели') {
                    return cars
                }
            })
        }
    },  [cars] [selectedClassCar])
    // ========================================================================//

    // если данные не загружены показываем спиннер
    if (!cars) {
        return <Spiner/>
    }

    const listCars = classCarFiltered.map((car) => {
        return (
            <>
                {classCarFiltered && <CardCar
                    car={car}
                    carId={car.id}
                    name={car.name}
                    priceMin={car.priceMin}
                    priceMax={car.priceMax}
                    registerSign={car.number}
                    colors={car.colors}
                    classCar={car.categoryId?.name}
                    imageCar={
                       car.thumbnail.path.includes('base64')
                            ? car.thumbnail.path
                            : 'https://api-factory.simbirsoft1.com' + car.thumbnail.path
                    }
                />}
            </>
        )
    })
    return (
        <div className='all-list-cars'>
            {listCars}
        </div>
    )
}
