import productReducer from './productReducer';
import categoryReducer from './categoryReducer';
import userReducer from './userReducer';
import { combineReducers } from 'redux';


export default combineReducers({
    productReducer, categoryReducer, user: userReducer
})