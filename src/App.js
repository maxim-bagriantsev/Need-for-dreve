import React from 'react';
import {StartPage} from './pages/startPage';
import {OrderPage} from "./pages/orderPage";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {NavLink} from "react-router-dom";

export const App = () => {
    return (
        <Router>
            <NavLink to='/'/>

            <Route exact path='/' component={StartPage}/>
            <Route exact path='/order' component={OrderPage}/>

        </Router>
    )
}





