import React, {useEffect} from "react";
import './step4.scss';
import {useDispatch, useSelector} from "react-redux";
import Moment from "react-moment";

export const Step4 = () => {

    // вытаскиваем необходимые данные store
    const {
        selectedCar,
        selectedFullTank,
        selectedDateStart,
        registerSign,
        imageSelectedCar
    } = useSelector((state) => {
               return state.reducerData
    })

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: 'SET_CURRENT_ORDER_PAGE', payload: 'TOTAL'})
    }, [])

    return (
        <div className='total-order'>
            <div>
                <h3>{selectedCar}</h3>
                <p className='car-number'>{registerSign}</p>
                <p>
                    <strong>Топливо </strong>
                    {selectedFullTank ? `${'100%'}` : ''}
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
    )
}