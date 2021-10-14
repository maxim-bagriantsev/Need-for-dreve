import React from "react";
import {Header} from "../Main/Header";
import {InfoOrder} from "./InfoOrder";
import {StepRouter} from "./StepRouter";
import './orderContent.scss';
import {ItemStepMenu} from "./ItemStepMenu";
import {useSelector} from "react-redux";

export const OrderContent = () => {

    const {
        selectedStreetAndHouse,
        selectedCar,
        selectedColor,
        selectedDateStart,
        selectedDateEnd,
        selectedTariff,
        activePage,
    } = useSelector((state) => {
                return state.reducerData
    })

    const orderSelect = selectedColor && selectedTariff && selectedDateStart && selectedDateEnd
    const isInTotalDisabled = !selectedTariff || !selectedColor || !selectedDateStart || !selectedDateEnd
    return (
        <div className='order-content'>
            <Header/>
            <div className='steps-menu'>
                <section>
                    <ul>
                        <ItemStepMenu lable="Местоположение"
                                      link={`${'/orderPage/step1'}`}
                                      isActive={activePage === 'SELECT_LOCATION'}
                                      isEnabled={selectedStreetAndHouse}
                        />
                        <ItemStepMenu lable="Модель"
                                      link={selectedStreetAndHouse ? `${'/orderPage/step2'}` : `${'#'}`}
                                      isActive={activePage === 'SELECT_MODEL_CAR'}
                                      isEnabled={selectedCar || selectedStreetAndHouse}
                        />
                        <ItemStepMenu lable="Дополнительно"
                                      link={selectedCar ? `${'/orderPage/step3'}` : `${'#'}`}
                                      isActive={activePage === 'SELECT_ADDITIONAL'}
                                      isEnabled={!isInTotalDisabled || selectedCar}
                        />
                        <ItemStepMenu lable="Итого"
                                      link={orderSelect ? `${'/orderPage/step4'}` : `${'#'}`}
                                      isActive={activePage === 'TOTAL'}
                                      isEnabled={selectedTariff || !isInTotalDisabled}
                        />
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




