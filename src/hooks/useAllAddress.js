import {useDispatch} from "react-redux";
import {getAddress} from "../api/api";
import {useEffect, useState} from "react";

export const useAllAddress = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        getAddress()
            .then(response => {
                dispatch({type: 'SET_ALL_STREET_AND_HOUSE', payload: response.data.data}) // - наш action {type: 'GET_ALL_ADDRESS', payload: response.data}
                dispatch({type: 'SET_ONLY_STREETS', payload: response.data.data.address})
            })
    }, [])
}