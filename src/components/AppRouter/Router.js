import React from 'react';
import {Route, Switch} from "react-router-dom";
import {StartPage} from "../../pages/startPage";
import {OrderPage} from "../../pages/orderPage";
import {Step1} from "../OrderContent/Step1";
import {Step2} from "../OrderContent/Step2";
import {Step3} from "../OrderContent/Step3";
import {Step4} from "../OrderContent/Step4";


export const AppRouter = () => {
    return (
        <Switch>
            <Route path='/' component={StartPage} exact/>
            <Route path='/orderPage' component={OrderPage}/>
        </Switch>
    );
};

