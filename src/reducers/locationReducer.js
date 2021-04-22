import _ from 'lodash';
import { FETCH_LOCATIONS } from '../actions/types';

export default function foo(state = {}, action) {
    switch (action.type) {
      case FETCH_LOCATIONS:
        return { ...state, ..._.mapKeys(action.payload, 'id') };
      default:
        return state;
    }
  };