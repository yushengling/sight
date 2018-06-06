import { call, put, takeEvery, takeLatest, delay } from 'redux-saga/effects';

import { fetchData, fetchCollection, fetchLike, addLike } from '../servers/api';

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
  let datas;
  datas = yield call(fetchLike, action);
  const { code } = datas;
  if(code === 200) {
    const { id, data } = action;
    const listData = data.listData;
    let json = {};
    for(let i in listData) {
      if(listData[i].id === id) {
        json.userLikes = listData[i].userLikes;
        json.likes = listData[i].likes;
        json.id = id;
        json.listData = listData;
        break;
      }
    }
    datas = yield call(addLike, json);
    console.log(datas);
    yield put({
      type: "GETDATA",
      homeData: datas
    });
  } else if(code === 400) {
    yield put({
      type: "GETDATA",
      homeData: datas
    });
  }
}

function* homeSaga() {
  yield takeEvery("GETDATA_ASYNC", fetchDataFun);
  yield takeEvery("COLLECTION_SAGA", fetchCollectionFun);
  yield takeEvery("LIKE_SAGA", fetchLikeFun);
}

export default homeSaga;