import { all, call, put, takeEvery } from "redux-saga/effects";
import { loadEpisodeList, loadEpisodeListSuccess, loadPodcastList, loadPodcastListSuccess } from "./reducer";
import PodcastService from "../services/PodcastService";

function* fetchPodcasts() {
  yield takeEvery(loadPodcastList.type, function* fetchPodcasts() {
    const podcastService = new PodcastService();
    const response: Response = yield call(podcastService.fetchPodcastList);
    yield put({ type: loadPodcastListSuccess.type, payload: response});
  });
}
function* fetchEpisodes() {
  yield takeEvery(loadEpisodeList.type, function* fetchEpisodes(action: {type: string, payload: string}) {
    const podcastService = new PodcastService();
    const response: Response = yield call(podcastService.fetchEpisodeList, action.payload);
    yield put({ type: loadEpisodeListSuccess.type, payload: response});
  });
}

export default function* rootSaga() {
  yield all([
    fetchPodcasts(),
    fetchEpisodes(),
  ])
}