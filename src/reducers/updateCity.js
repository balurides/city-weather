export default(state =[], action) => {
    switch (action.type) {
        case 'UPDATE_CITY':
            return [...state, action.payload];
        default:
            return state;
    };
}