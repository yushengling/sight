import { call, put, takeEvery, takeLatest, delay } from 'redux-saga/effects';

import { fetchData, fetchCollection, fetchLike } from '../servers/api';

function* fetchDataFun(action) {
  const datas = yield call(fetchData, action);
  yield put({
    type: "GETDATA",
    homeData: datas
  });
}

function* fetchCollectionFun(action) {
  const datas = yield call(fetchCollection, action);
  yield put({
    type: "GETDATA",
    homeData: datas
  });
}

function* fetchLikeFun(action) {
  const datas = yield call(fetchLike, action);
  yield put({
    type: "GETDATA",
    homeData: datas
  });
}

function* homeSaga() {
  yield takeEvery("GETDATA_ASYNC", fetchDataFun);
  yield takeEvery("COLLECTION_SAGA", fetchCollectionFun);
  yield takeEvery("LIKE_SAGA", fetchLikeFun);
}

export default homeSaga;