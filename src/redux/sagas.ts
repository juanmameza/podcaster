import { all, call, put, takeEvery } from "redux-saga/effects";
import CONSTANTS from "../config/constants";
import { PodcastResponse } from "../types";
import { loadPodcastList, loadPodcastListSuccess } from "./reducer";

function* watchFetchPodcasts() {
  yield takeEvery(loadPodcastList.type, function* fetchPodcasts() {
    const response: Response = yield call(fetch, CONSTANTS.PodcastListURL);
    const podcastsResponse: PodcastResponse = yield response.json();
    yield put({ type: loadPodcastListSuccess.type, payload: podcastsResponse.feed.entry});
  });
}

export default function* rootSaga() {
  yield all([
    watchFetchPodcasts(),
  ])
}