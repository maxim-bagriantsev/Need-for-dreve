import React from "react";
import './infoOrder.scss'
import {InfoOrderButton} from "../InfoOrderButton";
import {useSelector} from "react-redux";
import {OrderRow} from "./orderRow";
import moment from 'moment'
import {PriceOrder} from "./PriceOrder";

export const InfoOrder = (props) => {

    const {
        selectedTown,
        selectedStreetAndHouse,
        selectedCar,
        selectedColor,
        selectedDateStart,
        selectedDateEnd,
        selectedTariff,
        selectedFullTank,
        selectedBabyChair,
        selectedRightDrive,
        priceMin,
        priceMax,
        activePage
    } = useSelector((state) => {
        return state.reducerData
    })


//=========Определение периода времени между двумя датами===========//
    const dateA = moment(selectedDateEnd, 'DD HH');
    const dateB = moment(selectedDateStart, 'DD HH');
    const minute = dateA.diff(dateB, 'minute',)

    const ConvertDate = (num) => {
        const days = Math.floor(num / 1440);
        const hours = Math.floor((num % 1440) / 60);
        const minutes = (num % 1440) % 60;
        return {
            days: days,
            hours: hours,
            minutes: minutes
        };
    }
    const date = ConvertDate(minute)
//==================================================================//

    return (
        <div className='info-order'>
            <p>Ваш заказ:</p>
            <div className='info-order-data'>
                {/*// если выбран город, отображаем информацию в меню заказа*/}
                {selectedTown && <OrderRow label="Пункт выдачи" value={`${selectedTown}, ${selectedStreetAndHouse}`}/>}
                {/*// если выбрана машина, отображаем информацию в меню заказа*/}
                {selectedCar && <OrderRow label="Модель" value={`${selectedCar}`}/>}
                {/*// если выбран цвет, отображаем информацию в меню заказа*/}
                {selectedColor && <OrderRow label="Цвет" value={`${selectedColor}`}/>}
                {/*// если выбран период времени, отображаем информацию в меню заказа*/}
                {selectedDateEnd && < OrderRow label="Длительность аренды" value={`${date.days} д. ${date.hours} ч.`}/>}
                {/*// если выбран тариф времени, отображаем информацию в меню заказа*/}
                {selectedTariff && <OrderRow label="Тариф" value={`${selectedTariff}`}/>}
                {/*// если выбран дополнительный сервис, отображаем информацию в меню заказа*/}
                {selectedFullTank && <OrderRow label="Полный бак" value='Да'/>}
                {selectedBabyChair && <OrderRow label="Детское кресло" value='Да'/>}
                {selectedRightDrive && <OrderRow label="Правый руль" value='Да'/>}
                <PriceOrder
                    selectedCar={selectedCar}
                    priceMin={priceMin}
                    priceMax={priceMax}
                    isVisible={activePage === 'SELECT_ADDITIONAL'}
                />
            </div>
            <InfoOrderButton/>
        </div>
    )
}