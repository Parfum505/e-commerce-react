import { all, call } from "redux-saga/effects";
import { fetchCollectionsStartSaga } from "./shop/shop-saga";
import { userSaga } from "./user/user-saga";

export default function* rootSaga() {
  yield all([call(fetchCollectionsStartSaga), call(userSaga)]);
}
