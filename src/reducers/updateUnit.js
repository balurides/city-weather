
export default (state='',action) => {
    switch(action.type){
        case 'UPDATE_UNIT':
            return action.payload;
        default:
            return state;
    }
}