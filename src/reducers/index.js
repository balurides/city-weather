import { combineReducers } from 'redux';
import updateCity from './updateCity';
// import albumReducer from './albumReducer';

export default combineReducers({
    city:updateCity
});