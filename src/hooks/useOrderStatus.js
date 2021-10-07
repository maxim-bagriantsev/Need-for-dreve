import {getOrderStatus} from "../api/api";
import {useDispatch} from "react-redux";
import {useEffect} from "react";

export const useOrderStatus = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        getOrderStatus()
            .then(response => {
                dispatch({type: 'SET_ORDER_STATUS', payload: response.data.data})
            })
    }, [])
}
