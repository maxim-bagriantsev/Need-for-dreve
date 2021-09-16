import React from 'react';
import {Route, Switch} from "react-router-dom";
import {StartPage} from "../../pages/startPage";
import {OrderPage} from "../../pages/orderPage";
import {OrderFinish} from "../OrderContent/Step5";


export const AppRouter = () => {
    return (
        <Switch>
            <Route path='/' component={StartPage} exact/>
            <Route path='/orderPage' component={OrderPage}/>
            <Route path='/orderFinish' component={OrderFinish}/>
        </Switch>
    );
};

