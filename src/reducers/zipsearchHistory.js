
export default(state =[], action) => {
    switch (action.type) {
        case 'ZIP_SEARCH_HISTORY':
            return action.payload;
        default:
            return state;
    }
}