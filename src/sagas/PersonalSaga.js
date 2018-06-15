import { call, put, takeEvery, takeLatest, delay } from 'redux-saga/effects';

import { fetchAvatar, fetchImages } from '../servers/personal';

function* fetchAvatarFun() {
  const data = yield call(fetchAvatar);
  yield put({
    type: 'PERSONALREDU',
    data,
  });
}

function* fetchImagesFun(action) {
  const data = yield call(fetchImages, action);
}

function* personalSaga() {
  yield takeLatest('GETAVATAR_SAGA', fetchAvatarFun);
  yield takeLatest('UPLOADIMAGES_SAGA', fetchImagesFun);
}

export default personalSaga;