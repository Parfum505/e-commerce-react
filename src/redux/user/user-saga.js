import { takeLatest, all, call, put } from "redux-saga/effects";
import * as actionTypes from "./user-action-types";
import {
  signInWithGoogleFirebase,
  creatUserProfileDocument,
} from "../../firebase/firebase.utils";
import { authError, authSuccess } from "./user-actions";

function* signInWithGoogle() {
  try {
    const { user } = yield call(signInWithGoogleFirebase);
    const userRef = yield call(creatUserProfileDocument, user);

    const userSnapshot = yield userRef.get();
    yield put(
      authSuccess({
        id: userSnapshot.id,
        ...userSnapshot.data(),
      })
    );
  } catch (error) {
    yield put(authError(error.message));
  }
}
export function* signInWithGoogleStart() {
  yield takeLatest(actionTypes.GOOGLE_AUTH_START, signInWithGoogle);
}
export function* userSaga() {
  yield all([call(signInWithGoogleStart)]);
}
