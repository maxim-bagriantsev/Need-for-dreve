import React from "react";
import './infoOrder.scss'
import {InfoOrderButton} from "../InfoOrderButton";
import {useSelector} from "react-redux";
import {OrderRow} from "./orderRow";


export const InfoOrder = () => {
    // Новый способ ES2015
    const {town, streetAndHouse, car} = useSelector((state) => {
        return {
            town: state.reducerData.selectedTown,
            streetAndHouse: state.reducerData.selectedStreetAndHouse,
            car: state.reducerData.selectedCar.name
        }
    })

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
                <OrderRow label="Цвет" value="Голубой"/>
                <OrderRow label="Длительность аренды" value="1д 2ч"/>
                <OrderRow label="Тариф" value="На сутки"/>
                <OrderRow label="Полный бак" value="Да"/>
                <p>Цена: от 8 000 до 12 000 ₽ </p>
            </div>
            <InfoOrderButton/>
        </div>
    )
}