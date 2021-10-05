import {getOrderById} from "../api/getData";
import {useDispatch} from "react-redux";
import {useEffect} from "react";

export const useOrderConfirm = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        getOrderById()
            .then(response => {
                dispatch({type: 'SET_ORDER_ID', payload: '1231423413566456'}) // - action {type: 'SET_ORDER_ID', payload: response.data}
            })
    }, [])
}
