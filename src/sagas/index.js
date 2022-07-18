import { takeEvery } from 'redux-saga/effects';
import { IMAGES } from '~/constants';

function* handleImagesLoad() {
  yield console.log('loadIMG');
}

function* rootSaga() {
  yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}
export default rootSaga;
