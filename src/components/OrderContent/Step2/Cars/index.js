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
        carData
    } = useSelector((state) => {
        // return {
        //     selectedClassCar: state.reducerData.selectedClassCar,
        //     carData: state.reducerData.carData
        // }
        return state.reducerData
    })

    // =================фильтр машин по классу=============================//
    const classCarFiltered = useMemo(() => {
        if (selectedClassCar === null) {
            return carData
        } else if (selectedClassCar) {
            return carData.filter(fileteCar => {
                if (selectedClassCar === fileteCar.categoryId?.name) {
                    return fileteCar.categoryId?.name
                } else if (selectedClassCar === 'Все модели') {
                    return carData
                }
            })
        }
    },  [carData] [selectedClassCar])
    // ========================================================================//

    // если данные не загружены показываем спиннер
    if (!carData) {
        return <Spiner/>
    }

    const listCars = classCarFiltered.map((car, id) => {
        return (
            <React.Fragment key={id}>
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
            </React.Fragment>
        )
    })
    return (
        <div className='all-list-cars'>
            {listCars}
        </div>
    )
}
