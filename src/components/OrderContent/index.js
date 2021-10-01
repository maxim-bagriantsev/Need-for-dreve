import React, {useState} from "react";
import {Header} from "../Main/Header";
import {InfoOrder} from "./InfoOrder";
import {StepRouter} from "./StepRouter";
import './orderContent.scss';
import {ItemStepMenu} from "./ItemStepMenu";
import {useSelector} from "react-redux";


export const OrderContent = () => {

    // Новый способ ES2015
    const {
        streetAndHouse,
        car,
        color,
        selectedDateEnd,
        selectedTariff,

    } = useSelector((state) => {
        return {
            streetAndHouse: state.reducerData.selectedStreetAndHouse,
            car: state.reducerData.selectedCar,
            color: state.reducerData.selectedColor,
            selectedDateStart: state.reducerData.selectedDateStart,
            selectedDateEnd: state.reducerData.selectedDateEnd,
            selectedTariff: state.reducerData.selectedTariff,
        }
    })


    return (
        <div className='order-content'>
            <Header/>
            <div className='steps-menu'>
                <section>
                    <ul>
                        <ItemStepMenu lable="Местоположение" link='/orderPage/step1'/>
                        <ItemStepMenu lable="Модель" link={streetAndHouse ? `${'/orderPage/step2'}` : `${'#'}`}/>
                        <ItemStepMenu lable="Дополнительно" link={car ? `${'/orderPage/step3'}` : `${'#'}`}/>
                        <ItemStepMenu lable="Итого"
                                      link={color && selectedDateEnd && selectedTariff ? `${'/orderPage/step4'}` : `${'#'}`}/>
                    </ul>
                </section>
            </div>
            <div className='step-settings'>
                <StepRouter/>
                <InfoOrder/>
            </div>
        </div>
    )
}




