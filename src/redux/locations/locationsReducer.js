export const locationsReducer = (state='0', action) => {
    switch (action.type) {
        case 'GET_ALL_TOWNS':
            return {
                ...state,
                towns: action.payload
            }
        default:
            return state
    }
}