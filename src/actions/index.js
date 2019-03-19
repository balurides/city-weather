
import jsonPlaceHolder from '../apis/jsonPlaceHolder';

export const fecthUsers = () => async dispatch => {
    const response = await jsonPlaceHolder.get('/users');
    dispatch({
        type:'FETCH_USERS',
        payload:response.data
    })
}