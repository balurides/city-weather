
export default (state='',action) => {
    switch(action.type){
        case 'UPDATE_COUNTRY':
            return [...state,action.payload];
        default:
            return state;
    }
}