import _ from 'lodash';
import fetchWeather from '../apis/fetchweather';
import {API_KEY} from '../constants/keys';

export const fecthWeatherWithCity = (city) => async dispatch => {
    const apiurl =`/weather?q=${city}&appid=${API_KEY}`;
    console.log('api url ' + apiurl);
    const response = await fetchWeather.get(apiurl);
    dispatch({
        type:'FETCH_USERS',
        payload:response.data
    });
};
    