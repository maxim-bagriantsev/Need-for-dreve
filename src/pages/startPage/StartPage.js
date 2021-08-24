import React from "react";
import './startPage.scss'

import {Sidebar} from "../../components/Sidebar/Sidebar";
import {Main} from "../../components/Main/Main";
import {Slider} from "../../components/Slider/Slider";


export const StartPage = () => {
    return (
        <div className='startPage'>
            <Sidebar/>
            <Main/>
            <Slider/>
        </div>
    )
}