import * as actionTypes from "./shop-action-types";
const INITIAL_STATE = { collections: null, isFetching: false, errors: null };

const shopReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.FETCH_COLLECTIONS_START:
      return { ...state, isFetching: true, errors: null };
    case actionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        collections: payload,
        isFetching: false,
      };
    case actionTypes.FETCH_COLLECTIONS_ERROR:
      return { ...state, isFetching: false, errors: payload };
    default:
      return state;
  }
};
export default shopReducer;
