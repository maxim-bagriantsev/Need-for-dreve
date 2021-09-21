import React from "react";
import {Search} from "./Search";
import {Maps} from "./Map";
import './step1.scss';
import {getAllCities} from "../../../api";

export const Step1 = () => {

    return (
        <>
            <div className='step-one'>
                <Search/>
                <Maps/>
            </div>
        </>
    )
}