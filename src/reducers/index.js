import { combineReducers } from 'redux';
import userReducer from './userReducer';
import albumReducer from './albumReducer';

export default combineReducers({
    users:userReducer,
    albums:albumReducer

});