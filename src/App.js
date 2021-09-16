import React from 'react';
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





