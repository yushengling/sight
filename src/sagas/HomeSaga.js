import { call, put, takeEvery } from 'redux-saga/effects';

import { fetchData, fetchIsLogin, fetchClick } from '../servers/api';

function* fetchDataFun(action) {
  const datas = yield call(fetchData, action);
  yield put({
    type: "GETDATA",
    homeData: datas
  });
}

function* clicksagaFun(action) {
  let datas, month, day, code;
  const time = new Date();
  month = time.getMonth() + 1;
  day = time.getDate();
  const loginTime = localStorage.getItem('loginTime');
  //判断失效时间
  if(loginTime != month + day) {
    datas = yield call(fetchIsLogin, action);
    datas = JSON.parse(datas);
    code = datas.code;
  } else {
    code = 200;
  }
  //判断用户是否已登录
  if(code === 200) {
    //记录下登录时间
    localStorage.setItem('loginTime', month + day);
    const { id, data, num } = action;
    const listData = data.listData;
    let json = {};
    for(let i in listData) {
      if(listData[i].id === id) {
        json.userLikes = listData[i].userLikes;
        json.userCollection = listData[i].userCollection;
        json.likes = listData[i].likes;
        json.collection = listData[i].collection;
        json.id = id;
        json.num = num;
        json.listData = listData;
        break;
      }
    }
    datas = yield call(fetchClick, json);
  }
  yield put({
    type: "GETDATA",
    homeData: datas
  });
}

function* homeSaga() {
  yield takeEvery("GETDATA_SAGA", fetchDataFun);
  yield takeEvery("CLICK_SAGA", clicksagaFun);
}

export default homeSaga;