import { call, put, takeEvery, takeLatest, delay } from 'redux-saga/effects';

import { fetchAvatar, fetchImages } from '../servers/detail';

function* fetchAvatarFun(action) {
  let data = yield call(fetchAvatar);
  yield put({
    type: 'DETAILREDU',
    data
  });
}

function* detailSaga() {
  yield takeLatest('GETDETAILAVATAR_SAGA', fetchAvatarFun);
}

export default detailSaga;