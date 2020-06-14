import * as actionTypes from "./cart-action-types";

const INITIAL_STATE = {
  cartHidden: true,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        cartHidden: !state.cartHidden,
      };
    default:
      return state;
  }
};

export default cartReducer;
