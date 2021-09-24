import {useDispatch} from "react-redux";
import {getAddress} from "../api/getData";

export const useAllAddress = () => {
    const dispatch = useDispatch()

    getAddress()
        .then(response => {
            dispatch({type: 'GET_ALL_ADDRESS', payload: response.data.data}) // - нан action {type: 'GET_ALL_ADDRESS', payload: response.data}
        })
}