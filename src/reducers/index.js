import { combineReducers } from 'redux';
import updateCity from './updateCity';
import fetchWeather from './fetchWeather';
import updateCountry  from './updateCountry';

export default combineReducers({
    city:updateCity,
    fetchWeather:fetchWeather,
    country:updateCountry
});