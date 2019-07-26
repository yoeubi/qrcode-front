import { Cart } from './../types/index';
import produce from 'immer';

export interface CartState {
  carts: Cart[];
}

const initialState: CartState = {
  carts: [],
};

const ADD = 'ADD';
type ADD = typeof ADD;

interface AddAction {
  type: ADD;
  payload: Cart;
}

export function addCart(payload: Cart) {
  return {
    type: ADD,
    payload,
  };
}

const MOD = 'MOD';
type MOD = typeof MOD;

interface ModAction {
  type: MOD;
  payload: Cart;
}

export function modCart(payload: Cart) {
  return {
    type: MOD,
    payload,
  };
}

const REMOVE = 'REMOVE';
type REMOVE = typeof REMOVE;

interface RemoveAction {
  type: REMOVE;
  payload: string;
}

export function removeCart(payload: string) {
  return {
    type: REMOVE,
    payload,
  };
}

const CLEAR = 'CLEAR';
type CLEAR = typeof CLEAR;

interface ClearAction {
  type: CLEAR;
}

export function clearCart() {
  return {
    type: CLEAR,
  };
}

export type Action = AddAction | ModAction | RemoveAction | ClearAction;

export function cartReducer(state = initialState, action: Action): CartState {
  switch (action.type) {
    case ADD:
      const addCart: CartState = produce<CartState>(state, draft => {
        const find = draft.carts.find(
          c => c.product.name === action.payload.product.name,
        );
        if (find) {
          find.quantity += action.payload.quantity;
        } else {
          draft.carts.push(action.payload);
        }
      });
      return addCart;
    case MOD:
      const modedCart = produce(state, draft => {
        draft.carts.map(c => {
          if (c.product.name === action.payload.product.name) {
            c.quantity = action.payload.quantity;
          }
        });
      });
      return modedCart;
    case REMOVE:
      const removedCart = state.carts.filter(
        c => c.product.name !== action.payload,
      );
      return {
        carts: removedCart,
      };
    case CLEAR:
      return {
        carts: [],
      };
    default:
      return state;
  }
}
