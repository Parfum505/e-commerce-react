import * as actionTypes from "./cart-action-types";

export const toggleCartHidden = () => ({
  type: actionTypes.TOGGLE_CART_HIDDEN,
});
export const addItem = (item) => ({
  type: actionTypes.ADD_ITEM,
  payload: item,
});
export const deleteItem = (item) => ({
  type: actionTypes.DELETE_ITEM,
  payload: item,
});
export const clearItem = (item) => ({
  type: actionTypes.CLEAR_ITEM,
  payload: item,
});
export const clearAllItems = () => ({
  type: actionTypes.CLEAR_ALL_ITEMS,
});
