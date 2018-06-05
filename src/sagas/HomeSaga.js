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
  //判断用户是否已登录
  const datas = yield call(fetchLike, action);
  const { code } = datas;
  if(code === 200) {
    
  } else {
    yield put({
      type: "GETDATA",
      homeData: datas
    }); 
  }
  /*yield put({
    type: "GETDATA",
    homeData: datas
  });*/
}

function* homeSaga() {
  yield takeEvery("GETDATA_ASYNC", fetchDataFun);
  yield takeEvery("COLLECTION_SAGA", fetchCollectionFun);
  yield takeEvery("LIKE_SAGA", fetchLikeFun);
}

export default homeSaga;