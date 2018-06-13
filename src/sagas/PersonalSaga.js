import { call, put, takeEvery, takeLatest, delay } from 'redux-saga/effects';

import { fetchAvatar } from '../servers/personal';

function* fetchAvatarFun () {
  const data = yield call(fetchImage);
  yield put({
    type: 'PERSONALREDU',
    data,
  });
}

function* personalSaga() {
  yield takeLatest('GETAVATAR_SAGA', fetchAvatarFun);
}

export default personalSaga;