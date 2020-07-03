import * as actionTypes from "./shop-action-types";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

const fetchCollectionsStart = () => ({
  type: actionTypes.FETCH_COLLECTIONS_START,
});
const fetchCollectionsSuccess = (collections) => ({
  type: actionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collections,
});
const fetchCollectionsError = (errors) => ({
  type: actionTypes.FETCH_COLLECTIONS_ERROR,
  payload: errors,
});
export const fetchCollectionsAsync = () => {
  return (dispatch) => {
    dispatch(fetchCollectionsStart());
    const collectionRef = firestore.collection("collections");
    collectionRef
      .get()
      .then((snapShot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch((error) => dispatch(fetchCollectionsError(error.message)));
  };
};
