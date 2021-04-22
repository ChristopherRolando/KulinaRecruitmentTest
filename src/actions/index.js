import foods from '../apis/foods'
import { FETCH_FOODS, FETCH_LOCATIONS, ADD_TO_CART } from './types'

export const fetchFoods = () => async dispatch=> {
    const response = await foods.get('/food');
    dispatch({type:FETCH_FOODS, payload: response.data});
};
export const fetchLocations = () => async dispatch=> {
    const response = await foods.get('/location');
    dispatch({type:FETCH_LOCATIONS, payload: response.data});
};
export const addToCart = (payload) => async dispatch=> {
    dispatch({type:ADD_TO_CART, payload: payload});
};
// export function addToCart(payload){
//     return({
//         type: ADD_TO_CART,
//         payload: payload
//     });
// }
// export const addToCart = formValues => async (dispatch,getState)=> {
//     const response = await foods.post('/cart', { ...formValues });
//     dispatch({type:ADD_TO_CART, payload: response.data});
// };