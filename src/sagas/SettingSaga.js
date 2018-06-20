import { call, put, takeEvery, takeLatest, delay } from 'redux-saga/effects';

import { fetchPasswordChange, fetchAvatar } from '../servers/setting';

function* fetchPasswordChangeFun(action) {
  const data = yield call(fetchPasswordChange, action);
  yield put({
    type: 'SETTINGREDU',
    data
  });
}

function* fetchAvatarFun() {
  let data = yield call(fetchAvatar);
  yield put({
    type: 'SETTINGREDU',
    data
  });
}

function* settingSaga() {
  yield takeLatest('PASSWORDCHANGE_SAGA', fetchPasswordChangeFun);
  yield takeLatest('GETSETTINGAVATAR_SAGA', fetchAvatarFun);
}

export default settingSaga;