export default (state='',action) => {
    switch(action.type){
        case 'UPDATE_ZIPCODE':
            return action.payload;
        default:
            return state;
    }
}