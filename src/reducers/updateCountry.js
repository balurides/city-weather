
export default (state=null,action) => {
    switch(action.type){
        case 'UPDATE_COUNTRY':
            return [...state,action.payload];
        default:
            return state;
    }
}