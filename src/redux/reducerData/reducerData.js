const initialState = {
    townData: null,
    carData: null,
    streets: null,
    selectedTown: '',
    selectedStreetAndHouse: '',
    selectedCar: null,
    selectedColor: null,
    selectedDateStart: null,
    selectedDateEnd: null,
    selectedTariff: null,
    selectedFullTank: null,
    selectedBabyChair: null,
    selectedRightDrive: null,
    selectedClassCar: null,

    priceMin: '',
    priceMax: ''
    };

export const reducerData = (state = initialState, action) => {

    switch (action.type) {
        case 'SET_ALL_TOWNS':
            return {...state, townData: action.payload}
        case 'SET_ALL_CARS':
            return {...state, carData: action.payload}
        case 'SET_ALL_STREET_AND_HOUSE':
            return {...state, streets: action.payload}
        case 'SELECT_TOWN':
            return {...state, selectedTown: action.payload}
        case 'SELECT_STREET_AND_HOUSE':
            return {...state, selectedStreetAndHouse: action.payload}
        case 'SELECT_CAR':
            return {...state, selectedCar: action.payload}
        case 'SELECT_COLOR':
            return {...state, selectedColor: action.payload}
        case 'SELECT_DATE_START':
            return {...state, selectedDateStart: action.payload}
        case 'SELECT_DATE_END':
            return {...state, selectedDateEnd: action.payload}
        case 'SELECT_TARIFF':
            return {...state, selectedTariff: action.payload}
        case 'SELECT_FULL_TANK':
            return {...state, selectedFullTank: action.payload}
        case 'SELECT_BABY_CHAIR':
            return {...state, selectedBabyChair: action.payload}
        case 'SELECT_RIGHT_DRIVE':
            return {...state, selectedRightDrive: action.payload}
        case 'SELECT_CLASS_CAR':
            return {...state, selectedClassCar: action.payload}



        case 'PRICE_MIN':
            return {...state, priceMin: action.payload}

        case 'PRICE_MAX':
            return {...state, priceMax: action.payload}




        default:
            return state
    }
}
