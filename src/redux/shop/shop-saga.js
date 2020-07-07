import { takeLatest, call, put } from "redux-saga/effects";
import * as actionTypes from "./shop-action-types";
import { fetchCollectionsSuccess, fetchCollectionsError } from "./shop-actions";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapShot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapShot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsError(error.message));
  }
}
export function* fetchCollectionsStartSaga() {
  yield takeLatest(actionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}
