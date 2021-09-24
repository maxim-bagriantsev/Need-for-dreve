import React from "react";
import {Search} from "./Search";
import {Maps} from "./Map";
import './step1.scss';
import {useAllTowns} from "../../../hooks/useAllTowns";
import {useAllAddress} from "../../../hooks/useAllAddress";


export const Step1 = () => {

    // отправляем запрос на бэк и кладем в store - города
    useAllTowns()
    // отправляем запрос на бэк и кладем в store - адреса выдачи машин
    useAllAddress()

    return (
        <>
            <div className='step-one'>
                <Search />
                <Maps/>
            </div>
        </>
    )
}

