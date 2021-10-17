const initialState = {
    townData: null,
    carData: null,
    streets: null,
    categories: null,
    selectedTown: '',
    selectedTownId: '',
    selectedStreetAndHouse: '',
    selectedStreetAndHouseId: '',
    selectedCategoryId: null,
    filteredCategoryCar: null,
    selectedCategory: null,
    selectedCar: null,
    selectedCarId: null,
    selectedColor: null,
    selectedDateStart: null,
    selectedDateEnd: null,
    selectedTariff: null,
    selectedFullTank: null,
    selectedBabyChair: null,
    selectedRightDrive: null,
    selectedClassCar: null,
    colorsCar: null,
    priceMin: '',
    priceMax: '',
    registerSign: '',
    imageSelectedCar: '',
    activePage: '',
    orderStatus: null,
    orderConfirm: null,
};

export const reducerData = (state = initialState, action) => {

    switch (action.type) {
        case 'SET_ALL_TOWNS':
            return {...state, townData: action.payload}
        case 'SET_ALL_CARS':
            return {...state, carData: action.payload}
        case 'SET_ALL_STREET_AND_HOUSE':
            return {...state, streets: action.payload}
        case 'SET_ALL_CATEGORY':
            return {...state, categories: action.payload}
        case 'SELECT_CLASS_CAR_ID':
            return {...state, selectedCategoryId: action.payload}
        case 'GET_FILTER_CATEGORY_CARS':
            return {...state, filteredCategoryCar: action.payload}
        case 'SELECT_TOWN':
            return {...state, selectedTown: action.payload}
        case 'SELECT_TOWN_ID':
            return {...state, selectedTownId: action.payload}
        case 'SELECT_STREET_AND_HOUSE':
            return {...state, selectedStreetAndHouse: action.payload}
        case 'SELECT_STREET_AND_HOUSE_ID':
            return {...state, selectedStreetAndHouseId: action.payload}
        case 'GET_CATEGORY':
            return {...state, selectedCategory: action.payload}
        case 'SELECT_CAR':
            return {...state, selectedCar: action.payload}
        case 'SELECT_CAR_ID':
            return {...state, selectedCarId: action.payload}
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
        case 'COLORS-CAR':
            return {...state, colorsCar: action.payload}
        case 'PRICE_MIN':
            return {...state, priceMin: action.payload}
        case 'PRICE_MAX':
            return {...state, priceMax: action.payload}
        case 'REGISTER-SING':
            return {...state, registerSign: action.payload}
        case 'IMAGE-SELECT_CAR':
            return {...state, imageSelectedCar: action.payload}
        case 'SET_CURRENT_ORDER_PAGE':
            return {...state, activePage: action.payload}
        case 'SET_ORDER_STATUS':
            return {...state, orderStatus: action.payload}
        case 'GET_ORDER':
            return {...state, order: action.payload}
        default:
            return state
    }
}
