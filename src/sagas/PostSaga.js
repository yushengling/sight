import { call, put, takeEvery, takeLatest, delay } from 'redux-saga/effects';

import { fetchAvatar, fetchCreateTheme } from '../servers/post';

function* fetchAvatarFun(action) {
  let data = yield call(fetchAvatar);
  yield put({
    type: 'POSTREDU',
    data
  });
}

function* fetchCreateThemeFun(action) {
  let data = yield call(fetchCreateTheme, action.datas);
  yield put({
    type: 'POSTREDU',
    data
  });
}

function* fetchUpdateSelectFun(action) {
  let editorSelectValue = action.editorSelectValue;
  let postRedu = action.postRedu;
  postRedu.editorSelectValue = editorSelectValue;
  yield put({
    type: 'UPDATEREDU',
    postRedu
  });
}

function* fetchUpdateInputTitleFun(action) {
  let inputTitleValue = action.inputTitleValue;
  let postRedu = action.postRedu;
  postRedu.inputTitleValue = inputTitleValue;
  yield put({
    type: 'UPDATEREDU',
    postRedu
  });
}

function* fetchClearCodeFun(action) {
  action.postRedu.code = 0;
  let postRedu = action.postRedu;
  yield put({
    type: 'CLEARREDU',
    postRedu
  });
}

function* postSaga() {
  yield takeLatest('GETPOSTAVATAR_SAGA', fetchAvatarFun);
  yield takeLatest('CREATETHEME_SAGA', fetchCreateThemeFun);
  yield takeLatest('UPDATESELECT_SAGA', fetchUpdateSelectFun);
  yield takeLatest('UPDATEINPUTTITLE_SAGA', fetchUpdateInputTitleFun);
  yield takeLatest('CLEARCODE_SAGA', fetchClearCodeFun);
}

export default postSaga;