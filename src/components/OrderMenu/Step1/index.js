import React from "react";
import './step1.scss'
import {Search} from "./Search";
import {Maps} from "./Map";


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