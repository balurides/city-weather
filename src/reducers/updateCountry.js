
export default (state='',action) => {
    switch(action.type){
        case 'UPDATE_COUNTRY':
            return action.payload;
        default:
            return state;
    }
}