import React from "react";
import './infoOrder.scss'
import {InfoOrderButton} from "../InfoOrderButton";
import {useSelector} from "react-redux";
import {OrderRow} from "./orderRow";
import moment from 'moment'

export const InfoOrder = (props) => {

    // Новый способ ES2015
    const {
        town,
        streetAndHouse,
        car,
        color,
        selectedDateStart,
        selectedDateEnd,
        selectedTariff,
        selectedFullTank,
        selectedBabyChair,
        selectedRightDrive,

        priceMin,
        priceMax,
    } = useSelector((state) => {

        return {
            town: state.reducerData.selectedTown,
            streetAndHouse: state.reducerData.selectedStreetAndHouse,
            car: state.reducerData.selectedCar,
            color: state.reducerData.selectedColor,
            selectedDateStart: state.reducerData.selectedDateStart,
            selectedDateEnd: state.reducerData.selectedDateEnd,
            selectedTariff: state.reducerData.selectedTariff,
            selectedFullTank: state.reducerData.selectedFullTank,
            selectedBabyChair: state.reducerData.selectedBabyChair,
            selectedRightDrive: state.reducerData.selectedRightDrive,

            priceMin: state.reducerData.priceMin,
            priceMax: state.reducerData.priceMax,
        }
    })


    //Аналогичный вариант
    // const selectedData = useSelector((state)=>{
    //     return {town: state.reducerData.selectedTown, streetAndHouse: state.reducerData.selectedStreetAndHouse}
    // })


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
                {town && <OrderRow label="Пункт выдачи" value={`${town}, ${streetAndHouse}`}/>}
                {/*// если выбрана машина, отображаем информацию в меню заказа*/}
                {car && <OrderRow label="Модель" value={`${car}`}/>}
                {/*// если выбран цвет, отображаем информацию в меню заказа*/}
                {color && <OrderRow label="Цвет" value={`${color}`}/>}
                {/*// если выбран период времени, отображаем информацию в меню заказа*/}
                {selectedDateEnd && < OrderRow label="Длительность аренды" value={`${date.days} д. ${date.hours} ч.`}/>}
                {/*// если выбран тариф времени, отображаем информацию в меню заказа*/}
                {selectedTariff && <OrderRow label="Тариф" value={`${selectedTariff}`}/>}
                {/*// если выбран дополнительный сервис, отображаем информацию в меню заказа*/}
                {selectedFullTank && <OrderRow label="Полный бак" value='Да'/>}
                {selectedBabyChair && <OrderRow label="Детское кресло" value='Да'/>}
                {selectedRightDrive && <OrderRow label="Правый руль" value='Да'/>}
                <div className='price-range'>
                    <span className='price-range-title'>Цена:</span>
                    {car && ` от ${priceMin.toLocaleString()} до ${priceMax.toLocaleString()} ₽`}
                </div>
            </div>
            <InfoOrderButton/>
        </div>
    )
}