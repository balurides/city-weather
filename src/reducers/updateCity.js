export default(state='', action) => {
    switch (action.type) {
        case 'UPDATE_CITY':
            return action.payload;
        default:
            return state;
    };
}