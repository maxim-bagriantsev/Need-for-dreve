import React from "react";
import {Search} from "./Search";
import './step1.scss';
import {useAllTowns} from "../../../hooks/useAllTowns";
import {useAllAddress} from "../../../hooks/useAllAddress";
import {Maps} from "./Map";

export const Step1 = () => {

    // отправляем запрос на бэк и кладем в store - города
    useAllTowns()
    // отправляем запрос на бэк и кладем в store - адреса выдачи машин
    useAllAddress()

    return (
        <>
            <div className='step-one'>
                <Search/>
                <Maps/>
            </div>
        </>
    )
}

