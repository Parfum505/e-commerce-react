import * as actionTypes from "./cart-action-types";
import {
  addItemToCart,
  deleteItemFromCart,
  clearItemFromCart,
} from "../../utility/utility";

const INITIAL_STATE = {
  cartHidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        cartHidden: !state.cartHidden,
      };
    case actionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, payload),
      };
    case actionTypes.DELETE_ITEM:
      return {
        ...state,
        cartItems: deleteItemFromCart(state.cartItems, payload),
      };
    case actionTypes.CLEAR_ITEM:
      return {
        ...state,
        cartItems: clearItemFromCart(state.cartItems, payload),
      };
    case actionTypes.CLEAR_ALL_ITEMS:
      return {
        ...INITIAL_STATE,
      };
    default:
      return state;
  }
};

export default cartReducer;
