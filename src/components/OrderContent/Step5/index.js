import React, {useEffect} from 'react';
import {Header} from "../../Main/Header";
import {InfoOrder} from "../InfoOrder";
import {Sidebar} from "../../Sidebar";
import {useDispatch, useSelector} from "react-redux";
import Moment from "react-moment";
import './orderFinish.scss';

export const OrderFinish = () => {

    const {
        selectedCar,
        selectedFullTank,
        selectedDateStart,
        registerSign,
        imageSelectedCar,
        order
    } = useSelector((state) => {
        return state.reducerData
    })

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: 'SET_CURRENT_ORDER_PAGE', payload: 'CANCEL'})

    }, [])

    const orderId = order?.data?.id
    const orderIsFullTank = order?.data?.isFullTank
    const orderCarName = order?.data?.carId.name
    const orderCarNumber = order?.data?.carId.number
    const orderCarImg = order?.data?.carId?.thumbnail.path.includes('base64')
        ? order?.data?.carId?.thumbnail.path
        : 'https://api-factory.simbirsoft1.com' + order?.data?.carId?.thumbnail.path

    return (
        <div className='order'>
            <div className='wrapper'>
                <Sidebar/>
            </div>
            <div className='order-content'>
                <Header/>
                <div className='steps-menu'>
                    <section>
                        <ul>
                            {`Заказ номер ${orderId}`}
                        </ul>
                    </section>
                </div>
                <div className='step-settings'>
                    <div className='total-order'>
                        <div>
                            <h2 className='confirm-order-title'>Ваш заказ подтверждён</h2>
                            <h3>{orderCarName}</h3>
                            <p className='car-number'>{orderCarNumber}</p>
                            <p>
                                <strong>Топливо </strong>
                                {orderIsFullTank ? `${'100%'}` : ''}
                            </p>
                            <p>
                                <strong>Доступна с </strong>
                                <Moment format='DD.MM.YYYY H:mm'>{selectedDateStart}</Moment>
                            </p>
                        </div>
                        <div className='total-car-img'>
                            <img className='car-img' src={orderCarImg}/>
                        </div>
                    </div>
                    <InfoOrder/>
                </div>
            </div>
        </div>
    )
};

