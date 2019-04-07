import { combineReducers } from 'redux';
import updateCity from './updateCity';
import fetchWeather from './fetchWeather';

export default combineReducers({
    city:updateCity,
    fetchWeather:fetchWeather
});