import { combineReducers } from 'redux';
import updateCity from './updateCity';
import fetchWeather from './fetchWeather';
import updateCountry  from './updateCountry';
import updateUnit from './updateUnit';
import zipSearchHistory from './zipsearchHistory';
import zipcodeUpdate from './updateZipcode';

export default combineReducers({
    city:updateCity,
    fetchWeather:fetchWeather,
    country:updateCountry,
    unit:updateUnit,
    weatherHistory:zipSearchHistory,
    zipcodeUpdate:zipcodeUpdate
});