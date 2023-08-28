import { configureStore } from "@reduxjs/toolkit";

import podcastsReducer from "./reducer";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    posts: podcastsReducer,
  },
  middleware: [sagaMiddleware],
});
