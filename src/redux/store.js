import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import rootReducers from "./root-reducer";
import createSagaMiddleware from "redux-saga";
import { fetchCollectionsStartSaga } from "./shop/shop-saga";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}
export const store = createStore(rootReducers, applyMiddleware(...middlewares));
sagaMiddleware.run(fetchCollectionsStartSaga);
export const persistor = persistStore(store);
