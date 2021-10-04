import React from "react";
import {useSelector} from "react-redux";

export const PointList =()=>{
    debugger
    // вытаскиваем данные городов из store
    const streets = useSelector((state) => {
        return state.reducerData.streets
    })
    return streets
}