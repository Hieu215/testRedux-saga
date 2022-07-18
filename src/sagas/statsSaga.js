import { take, fork, put, call } from 'redux-saga/effects';
import { loadImagesStats, setImagesStats } from '~/actions';
import { IMAGES } from '~/constants';
import {fetchImageStats} from '~/api';
function* handleStatsRequest(id) {
  for (let i = 0; i < 3; i++) {
    try {
      yield put(loadImagesStats(id));
      const res = yield call(fetchImageStats, id);
      yield put(setImagesStats(id, res.downloads.total));
    } catch (e) {}
  }
}

export default function* watchStatsRequest() {
  while (true) {
    const { images } = yield take(IMAGES.LOAD_SUCCESS);
    for (let i = 0; i < images.length; i++) {
      yield fork(handleStatsRequest, images[i].id);
    }
  }
}
