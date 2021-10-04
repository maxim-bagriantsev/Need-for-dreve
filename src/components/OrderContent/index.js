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
        activePage,

    } = useSelector((state) => {
        return {
            streetAndHouse: state.reducerData.selectedStreetAndHouse,
            car: state.reducerData.selectedCar,
            color: state.reducerData.selectedColor,
            selectedDateStart: state.reducerData.selectedDateStart,
            selectedDateEnd: state.reducerData.selectedDateEnd,
            selectedTariff: state.reducerData.selectedTariff,
            activePage: state.reducerData.activePage,
        }
    })

    return (
        <div className='order-content'>
            <Header/>
            <div className='steps-menu'>
                <section>
                    <ul>
                        <ItemStepMenu lable="Местоположение" link={`${'/orderPage/step1'}`}
                                      isActive={activePage === 'SELECT_LOCATION'}/>
                        <ItemStepMenu lable="Модель" link={streetAndHouse ? `${'/orderPage/step2'}` : `${'#'}`}
                                      isActive={activePage === 'SELECT_MODEL_CAR'}/>
                        <ItemStepMenu lable="Дополнительно" link={car ? `${'/orderPage/step3'}` : `${'#'}`}
                                      isActive={activePage === 'SELECT_ADDITIONAL'}/>
                        <ItemStepMenu lable="Итого" link={`${'/orderPage/step4'}`} isActive={activePage === 'TOTAL'}/>
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




