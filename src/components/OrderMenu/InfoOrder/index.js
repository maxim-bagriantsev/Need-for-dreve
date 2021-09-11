import React from "react";
import {Button} from "../Button";
import './infoOrder.scss'

export const InfoOrder = () => {
    return (
        <div className='info-order'>
            <p>Ваш заказ:</p>
            <div className='info-order-data'>
                <div className='address'>
                    <div className='address-point'>
                        <p>Пункт выдачи</p>
                    </div>
                    <div className='address-name'>
                        <p>Ульяновск,
                            Нариманова 42
                        </p>
                    </div>
                </div>
                <div className='model'>
                    <div className='model-point'>
                        <p>Модель</p>
                    </div>
                    <div className='model-name'>
                        <p>Hyndai, i30 N</p>
                    </div>
                </div>
                <div className='model'>
                    <div className='model-point'>
                        <p>Цвет</p>
                    </div>
                    <div className='model-name'>
                        <p>Голубой</p>
                    </div>
                </div>
                <div className='model'>
                    <div className='model-point'>
                        <p>Длительность аренды</p>
                    </div>
                    <div className='model-name'>
                        <p>1д 2ч</p>
                    </div>
                </div>
                <div className='model'>
                    <div className='model-point'>
                        <p>Тариф</p>
                    </div>
                    <div className='model-name'>
                        <p>На сутки</p>
                    </div>
                </div>
                <div className='model'>
                    <div className='model-point'>
                        <p>Полный бак</p>
                    </div>
                    <div className='model-name'>
                        <p>Да</p>
                    </div>
                </div>
                <p>Цена: от 8 000 до 12 000 ₽ </p>
            </div>
            <Button/>
        </div>
    )
}