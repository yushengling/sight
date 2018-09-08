import { call, put, takeEvery, takeLatest, delay } from 'redux-saga/effects';

import { fetchAvatar, fetchUploadImages, fetchUploadAvatar, fetchImages, fetchSignOut } from '../servers/personal';

import { message } from 'antd';
message.config({
  top: 24,
  duration: 2,
  maxCount: 1,
});

function* fetchFirstImagesFun(action) {
  let data = yield call(fetchImages, action);
  yield put({
    type: 'PERSONALREDU',
    data,
  });
}

function* fetchUploadImagesFun(action) {
  let data = yield call(fetchUploadImages, action);
  if(data.code === 200) {
    message.success('上传成功');
    let images = yield call(fetchImages, action);
    data.listData = images.listData;
    data.total = images.total;
    data.count = images.count;
    yield put({
      type: 'PERSONALREDU',
      data,
    });
  } else {
    message.error('上传失败');
  }
}

function* fetchUploadAvatarFun(action) {
  const data = yield call(fetchUploadAvatar, action);
  message.success('上传成功');
  yield put({
    type: 'PERSONALREDU',
    data,
  });
}

function* fetchImagesFun(action) {
  let images = yield call(fetchImages, action);
  let data = {};
  data.listData = images.listData;
  data.total = images.total;
  data.count = images.count;
  yield put({
    type: 'PERSONALREDU',
    data,
  });
}

function* fetchSignOutFun() {
  let data = yield call(fetchSignOut);
  data = JSON.parse(data);
  yield put({
    type: 'CLEARREDU',
    data,
  });
}

function* personalSaga() {
  yield takeLatest('GETFIRSTIMAGES_SAGA', fetchFirstImagesFun);
  yield takeLatest('UPLOADIMAGES_SAGA', fetchUploadImagesFun);
  yield takeLatest('UPLOADAVATAR_SAGA', fetchUploadAvatarFun);
  yield takeLatest('GETIMAGES_SAGA', fetchImagesFun);
  yield takeLatest('SIGNOUT_SAGA', fetchSignOutFun);
}

export default personalSaga;