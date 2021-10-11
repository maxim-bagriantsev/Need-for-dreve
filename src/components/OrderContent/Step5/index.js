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
        orderConfirm
    } = useSelector((state) => {
        return {
            selectedCar: state.reducerData.selectedCar,
            selectedFullTank: state.reducerData.selectedFullTank,
            selectedDateStart: state.reducerData.selectedDateStart,
            registerSign: state.reducerData.registerSign,
            imageSelectedCar: state.reducerData.imageSelectedCar,
            orderConfirm: state.reducerData.order,
        }
    })

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: 'SET_CURRENT_ORDER_PAGE', payload: 'CANCEL'})

    }, [])

    const orderId = orderConfirm?.data?.id
    const orderIsFullTank = orderConfirm.data?.isFullTank

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
                            <h3>{selectedCar}</h3>
                            <p className='car-number'>{registerSign}</p>
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
                            <img className='car-img' src={imageSelectedCar}/>
                        </div>
                    </div>
                    <InfoOrder/>
                </div>
            </div>
        </div>
    )
};

