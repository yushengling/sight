import { call, put, takeEvery, takeLatest, delay } from 'redux-saga/effects';

import { fetchPasswordChange } from '../servers/setting';

function* fetchPasswordChangeFun(action) {
  const data = yield call(fetchPasswordChange, action);
  yield put({
    type: 'SETTINGREDU',
    data
  });
}

function* settingSaga() {
  yield takeLatest('PASSWORDCHANGE_SAGA', fetchPasswordChangeFun);
}

export default settingSaga;