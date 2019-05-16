// import _ from 'lodash';

import fetchWeather from '../apis/fetchweather';
import {API_KEY} from '../constants/keys';

export const fecthWeatherWithCity = (city) => async dispatch => {
    const apiurl =`/weather?q=${city}&appid=${API_KEY}`;
    const response = await fetchWeather.get(apiurl);
    dispatch({
        type:'FETCH_WEATHER',
        payload:response.data
    });
};

export const updateCity = city => dispatch => {
    dispatch({
        type:'UPDATE_CITY',
        payload:city
    });
};

export const updateCountry = country => dispatch =>{
    dispatch({
        type:'UPDATE_COUNTRY',
        payload:country
    })
}
    
    
    