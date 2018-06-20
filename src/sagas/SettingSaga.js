import { call, put, takeEvery, takeLatest, delay } from 'redux-saga/effects';

import { fetchPasswordChange, fetchAvatar } from '../servers/personal';

function* fetchPasswordChangeFun() {
  let data = yield call(fetchPasswordChange);
  yield put({
    type: 'CLEARREDU',
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