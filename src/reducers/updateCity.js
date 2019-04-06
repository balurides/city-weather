export default(state =[], action) => {
    switch (action.type) {
        case 'UPDATE_CITY':
        console.log('reducer' + action.payload);
            return [...state, action.payload];
        default:
            return state;
    }
}