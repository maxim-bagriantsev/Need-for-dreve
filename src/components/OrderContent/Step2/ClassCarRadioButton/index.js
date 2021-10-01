import React, {useMemo} from "react";
import {allModel, economyClass, premiumClass} from "./itemClassCarRarioButton.constans";
import './radioButton.scss';

import {ItemClassCarRadioButton} from "./ItemClassCarRadioButton/ItemClassCarRadioButton";
import {useSelector} from "react-redux";

export const RadioButton = () => {

    const selectedClassCar = useSelector((state)=>{
        return state.reducerData.selectedClassCar
    })


    // const classCarFiltered = useMemo(() => {
    //     debugger
    //     if (selectedClassCar) {
    //         return cars.filter(car => {
    //             if (selectedClassCar === car.categoryId.name) {
    //                 return classCars.class
    //             }
    //         })
    //     }
    // }, [selectedClassCar])

    return (
        <>
            <div className='button-radio'>
                <div className="form-group">
                    <ItemClassCarRadioButton text={allModel} id={1}/>
                    <ItemClassCarRadioButton text={economyClass} id={2}/>
                    <ItemClassCarRadioButton text={premiumClass} id={3}/>
                </div>
            </div>
        </>
    )
}