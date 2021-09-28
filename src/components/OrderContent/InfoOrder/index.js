import React from "react";
import './infoOrder.scss'
import {InfoOrderButton} from "../InfoOrderButton";
import {useSelector} from "react-redux";
import {OrderRow} from "./orderRow";

export const InfoOrder = () => {
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
        selectedRightDrive
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
            selectedRightDrive: state.reducerData.selectedRightDrive
        }
    })

    //расчет количества времени аренды
    const oneDay = 24 * 60 * 60 * 1000;

    const totalRentalPeriod = Math.round(Math.abs((selectedDateStart - selectedDateEnd) / (oneDay)));
    console.log(totalRentalPeriod)

    //Аналогичный вариант
    // const selectedData = useSelector((state)=>{
    //     return {town: state.reducerData.selectedTown, streetAndHouse: state.reducerData.selectedStreetAndHouse}
    // })

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
                {selectedDateEnd && < OrderRow label="Длительность аренды" value={`${totalRentalPeriod} д. ${10} ч.`}/>}
                {/*// если выбран тариф времени, отображаем информацию в меню заказа*/}
                {selectedTariff && <OrderRow label="Тариф" value={`${selectedTariff}`}/>}
                {/*// если выбран дополнительный сервис, отображаем информацию в меню заказа*/}
                {selectedFullTank && <OrderRow label="Полный бак" value='Да'/>}
                {selectedBabyChair && <OrderRow label="Детское кресло, 200р" value='Да'/>}
                {selectedRightDrive && <OrderRow label="Правый руль, 1600р" value='Да'/>}
                <p>Цена: от 8 000 до 12 000 ₽ </p>
            </div>
            <InfoOrderButton/>
        </div>
    )
}