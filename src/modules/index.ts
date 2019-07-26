import { combineReducers } from 'redux';
import { listReducer, ListState } from './list';
import { CartState, cartReducer } from './cart';

export interface StoreState {
  list: ListState;
  cart: CartState;
}

export default combineReducers<StoreState>({
  list: listReducer,
  cart: cartReducer,
});
