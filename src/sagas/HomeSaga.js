import { call, put, takeEvery } from 'redux-saga/effects';

import { fetchData, fetchIsLogin } from '../servers/home';

function* fetchDataFun(action) {
  const datas = yield call(fetchData, action);
  yield put({
    type: "GETDATA",
    homeData: datas
  });
}

function* homeSaga() {
  yield takeEvery("GETDATA_SAGA", fetchDataFun);
}

export default homeSaga;