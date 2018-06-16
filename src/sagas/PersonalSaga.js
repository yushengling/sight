import { call, put, takeEvery, takeLatest, delay } from 'redux-saga/effects';

import { fetchAvatar, fetchImages, fetchUploadAvatar } from '../servers/personal';

function* fetchAvatarFun() {
  const data = yield call(fetchAvatar);
  yield put({
    type: 'PERSONALREDU',
    data,
  });
}

function* fetchImagesFun(action) {
  const data = yield call(fetchImages, action);
  yield put({
    type: 'PERSONALREDU',
    data,
  });
}

function* fetchUploadAvatarFun(action) {
  const data = yield call(fetchUploadAvatar, action);
  yield put({
    type: 'PERSONALREDU',
    data,
  });
}

function* personalSaga() {
  yield takeLatest('GETAVATAR_SAGA', fetchAvatarFun);
  yield takeLatest('UPLOADIMAGES_SAGA', fetchImagesFun);
  yield takeLatest('UPLOADAVATAR_SAGA', fetchUploadAvatarFun);
}

export default personalSaga;