export default(state =[], action) => {
    switch (action.type) {
        case 'FETCH_WEATHER':
        console.log(action.payload);
            return [...state, action.payload];
        default:
            return state;
    }
}