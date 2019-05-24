// import _ from 'lodash';

import fetchWeather from '../apis/fetchweather';
import {API_KEY} from '../constants/keys';

export const fecthWeatherWithCity = (city,country) => async dispatch => {
    const apiurl =`/weather?q=${city},${country}&appid=${API_KEY}`;
    try {
        const response = await fetchWeather.get(apiurl);
        console.log('response' + response.data);
        dispatch({
            type:'FETCH_WEATHER',
            payload:response.data,
            // status:response.status
        });
    } catch(err) {
        console.log(err);
        // dispatch({
        // type:'FETCH_WEATHER',
        // payload:err
        // });
    }
   
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

export const updateUnit = unit => dispatch => {
    dispatch({
        type:'UPDATE_UNIT',
        payload:unit
    })
}

export const fetchWeatherHistoryWithZip = zipcode => async dispatch => {
    const zipapiUrl =`/forecast?zip=${zipcode}&appid=${API_KEY}`;
    var zipSearchResponse;
    try {
        zipSearchResponse = await fetchWeather.get(zipapiUrl);
    
    // const zipSearchResponse = await fetchWeather.get(zipapiUrl);
        // console.log('response' + zipSearchResponse.data.city);
    zipSearchResponse.data.cod === "200" ? console.log('pass'):console.log('fail');
} catch (error) {
    console.log("balaji" +error);
}
    dispatch({
        type:'ZIP_SEARCH_HISTORY',
       payload:zipSearchResponse.data

    })
}

export const zipcodeUpdate = zip => dispatch => {
    dispatch({
        type:'UPDATE_ZIPCODE',
        payload:zip
    })
}
    
    
    