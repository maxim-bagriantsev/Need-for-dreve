import React from "react";
import {useSelector} from "react-redux";

export const PriceOrder = (props) => {


    const {
        priceMin,
    } = useSelector((state) => {

        return {
            priceMin: state.reducerData.priceMin,
        }
    })
//====При переходе на вкладку дополнительно, отображаем минимальную цены за выбранную марку авто=====//
    if (props.isVisible) {
        return (
            <div className='price-range'>
                <span className='price-range-title'>Цена:</span>
                {` ${props.priceMin.toLocaleString()}  ₽`}
            </div>
        )
    }
//===================================================================================================//
    return (
        <div className='price-range'>
            <span className='price-range-title'>Цена:</span>
            {props.selectedCar && ` от ${props.priceMin.toLocaleString()} до ${props.priceMax.toLocaleString()} ₽`}
        </div>
    )
}