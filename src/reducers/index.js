import { combineReducers } from 'redux';
import foodReducer from './foodReducer';
import locationReducer from './locationReducer';

export default combineReducers({
  foods: foodReducer,
  locations: locationReducer,
  cartProducts: foodReducer,
});