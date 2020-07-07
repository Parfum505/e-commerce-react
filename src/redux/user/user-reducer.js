import * as actionTypes from "./user-action-types";

const INITIAL_STATE = {
  currentUser: null,
  loading: false,
  errors: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.EMAIL_AUTH_START:
    case actionTypes.GOOGLE_AUTH_START:
      return {
        ...state,
        loading: true,
        errors: null,
      };
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: null,
        currentUser: payload,
      };

    case actionTypes.AUTH_ERROR:
      return {
        ...state,
        loading: false,
        errors: payload,
      };
    case actionTypes.CLEAR_AUTH_ERROR:
      return {
        ...state,
        errors: null,
      };
    case actionTypes.AUTH_LOGOUT:
      return {
        ...state,
        currentUser: null,
      };
    default:
      return state;
  }
};

export default userReducer;
