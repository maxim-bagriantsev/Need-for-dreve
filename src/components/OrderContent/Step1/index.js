import React, {useEffect} from "react";
import {Search} from "./Search";
import './step1.scss';
import {useAllTowns} from "../../../hooks/useAllTowns";
import {useAllAddress} from "../../../hooks/useAllAddress";
import {Maps} from "./Map";

import {useDispatch} from "react-redux";
import {YMapContainer} from "./Map/Ymap/Custom";

export const Step1 = () => {

    // отправляем запрос на бэк и кладем в store - города
    useAllTowns()
    // отправляем запрос на бэк и кладем в store - адреса выдачи машин
    useAllAddress()

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: 'SET_CURRENT_ORDER_PAGE', payload: 'SELECT_LOCATION'})
    }, [])

    return (
        <>
            <div className='step-one'>
                <Search/>
                <Maps/>

            </div>
        </>
    )
}

