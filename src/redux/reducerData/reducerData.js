const initialState = {
    townData: null,
    carData: null,
    addressData: null
};

export const reducerData = (state = initialState, action) => {

    switch (action.type) {
        case 'GET_ALL_TOWNS':
            return {...state, townData: action.payload}
        case 'GET_ALL_CARS':
            return {...state, carData: action.payload}
        case 'GET_ALL_ADDRESS':
            return {...state, addressData: action.payload}
        default:
            return state
    }
}
