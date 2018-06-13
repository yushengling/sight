import { call, put, takeEvery } from 'redux-saga/effects';

import { fetchRegister, fetchUpdatePassword, fetchLogin } from '../servers/user';

function* registerUser(action) {
  const data = yield call(fetchRegister, action);
  yield put({
    type: 'REGISTERREDU',
    data,
  });
}

function* updatePassword(action) {
  const data = yield call(fetchUpdatePassword, action);
  yield put({
    type: 'REGISTERREDU',
    data,
  });
}

function* login(action) {
  const data = yield call(fetchLogin, action);
  yield put({
    type: 'REGISTERREDU',
    data,
  }); 
}

function* userSaga() {
  yield takeEvery('REGISTER_SAGA', registerUser);
  yield takeEvery('UPDATEPASSWORD_SAGA', updatePassword);
  yield takeEvery('LOGIN_SAGA', login);
}

export default userSaga;