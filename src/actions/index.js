import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceHolder';

export const fecthUsers = () => async dispatch => {
    const response = await jsonPlaceholder.get('/users');
    dispatch({
        type:'FETCH_USERS',
        payload:response.data
    });
};
    
export const fetchAlbums = userId => async dispatch => {
    const response1 = await jsonPlaceholder.get(`/albums/userId=${userId}`);
    dispatch({
        type:'FETCH_ALBUMS',
        payload:response1.data
    });
};
    