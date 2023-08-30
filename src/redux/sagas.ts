import { all, call, put, takeEvery } from "redux-saga/effects";
import { loadPodcastList, loadPodcastListSuccess } from "./reducer";
import PodcastService from "../services/PodcastService";

function* fetchPodcasts() {
  yield takeEvery(loadPodcastList.type, function* fetchPodcasts() {
    const podcastService = new PodcastService();
    const response: Response = yield call(podcastService.fetchPodcastList);
    yield put({ type: loadPodcastListSuccess.type, payload: response});
  });
}

export default function* rootSaga() {
  yield all([
    fetchPodcasts(),
  ])
}