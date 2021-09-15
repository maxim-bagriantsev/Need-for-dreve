import React from 'react';
import {StartPage} from './pages/startPage';
import {OrderPage} from "./pages/orderPage";
import {Route} from "react-router-dom";
import {NavLink} from "react-router-dom";
import {AppRouter} from "./components/AppRouter/Router";


export const App = () => {
    return (
        <>
            <NavLink to='/'/>
            <AppRouter/>
        </>
    )
}





