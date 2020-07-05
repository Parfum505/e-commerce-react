import * as actionTypes from "./shop-action-types";


export const fetchCollectionsStart = () => ({
  type: actionTypes.FETCH_COLLECTIONS_START,
});
export const fetchCollectionsSuccess = (collections) => ({
  type: actionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collections,
});
export const fetchCollectionsError = (errors) => ({
  type: actionTypes.FETCH_COLLECTIONS_ERROR,
  payload: errors,
});
