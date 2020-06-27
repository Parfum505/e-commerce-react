import * as actionTypes from "./user-action-types";

export const authStart = () => ({
  type: actionTypes.AUTH_START,
});
export const authSuccess = (user) => ({
  type: actionTypes.AUTH_SUCCESS,
  payload: user,
});
export const authError = (error) => ({
  type: actionTypes.AUTH_ERROR,
  payload: error,
});
export const clearAuthError = () => ({
  type: actionTypes.CLEAR_AUTH_ERROR,
});
export const signOut = () => ({
  type: actionTypes.AUTH_LOGOUT,
});
