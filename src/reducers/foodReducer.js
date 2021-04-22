import _ from 'lodash';
import { FETCH_FOODS, ADD_TO_CART } from '../actions/types';

export default function foo(state = {}, action) {
    switch (action.type) {
      case FETCH_FOODS:
        return { ...state, ..._.mapKeys(action.payload, 'id') };
      case ADD_TO_CART:
        return  { ...state, [action.payload.id]: action.payload };
      default:
        return state;
    }
  };