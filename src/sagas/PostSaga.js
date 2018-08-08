import { call, put, takeEvery, takeLatest, delay } from 'redux-saga/effects';

import { fetchAvatar } from '../servers/post';

function* fetchAvatarFun(action) {
  let data = yield call(fetchAvatar);
  yield put({
    type: 'POSTREDU',
    data
  });
}

function* postSaga() {
  yield takeLatest('GETPOSTAVATAR_SAGA', fetchAvatarFun);
}

export default postSaga;