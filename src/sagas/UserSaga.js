import { call, put, takeEvery } from 'redux-saga/effects';
import { message } from 'antd';
import { fetchRegister, fetchUpdatePassword, fetchLogin } from '../servers/user';

function* registerUser(action) {
  let data = yield call(fetchRegister, action);
  if(data.code === 500) {
    message.error(data.error);
    return;
  }
  yield put({
    type: 'REGISTERREDU',
    data,
  });
}

function* updatePassword(action) {
  let data = yield call(fetchUpdatePassword, action);
  if(data.code === 500) {
    message.error(data.error);
    return;
  }
  yield put({
    type: 'REGISTERREDU',
    data,
  });
}

function* login(action) {
  let data = yield call(fetchLogin, action);
  if(data.code === 500) {
    message.error(data.error);
    return;
  }
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