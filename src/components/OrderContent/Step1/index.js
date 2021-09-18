import React from "react";
import {Search} from "./Search";
import {Maps} from "./Map";
import './step1.scss';

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