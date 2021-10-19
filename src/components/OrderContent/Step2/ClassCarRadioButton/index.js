import React, {useEffect, useMemo, useState} from "react";
import {allModel} from "./itemClassCarRarioButton.constans";
import {ItemClassCarRadioButton} from "./ItemClassCarRadioButton/ItemClassCarRadioButton";
import './radioButton.scss';
import {useCategoryCar} from "../../../../hooks/useCategoryCar";
import {useDispatch, useSelector} from "react-redux";
import {getAllCars, getFilterCategory} from "../../../../api/api";

export const RadioButton = () => {
    const [isChecked, setIsChecked] = useState(false)
    const {
        categories,
        selectedClassCar
    } = useSelector((state) => {
        return state.reducerData
    })
    useCategoryCar()


    const dispatch = useDispatch()

    useEffect(() => {

        getFilterCategory()
            .then(response => {
                dispatch({type: 'GET_FILTER_CATEGORY_CARS', payload: response.data.data})
            })
    }, [])

    const categoryName = categories?.map((item, id) => {
        return <ItemClassCarRadioButton text={item.name} id={item.id} key={id}/>
    })

    const hendleChange = () => {
        setIsChecked(true)
    }

    return (
        <>
            <div className='button-radio'>
                <div className="form-group">
                    <ItemClassCarRadioButton text={allModel} isChecked={!selectedClassCar || isChecked}
                                             onChange={hendleChange}/>
                    {categoryName}
                </div>
            </div>
        </>
    )
}