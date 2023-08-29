import { configureStore } from "@reduxjs/toolkit";

import podcastsReducer from "./reducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    podcasts: podcastsReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
