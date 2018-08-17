import { call, put, takeEvery, takeLatest, delay } from 'redux-saga/effects';

import { fetchAvatar, fetchCreateTheme, fetchGetPost } from '../servers/post';

function* fetchAvatarFun(action) {
  let data = yield call(fetchAvatar);
  let lists = yield call(fetchGetPost, action.count, action.selectValue);
  yield put({
    type: 'POSTREDU',
    data,
    lists
  });
}

function* fetchPostDatasFun(action) {
  let lists = yield call(fetchGetPost, action.count, action.selectValue);
  yield put({
    type: 'POSTREDU',
    lists
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

function* fetchUpdateInputThemeFun(action) {
  let inputThemeValue = action.inputThemeValue;
  let postRedu = action.postRedu;
  postRedu.inputThemeValue = inputThemeValue;
  yield put({
    type: 'UPDATEREDU',
    postRedu
  });
}

function* fetchClearCodeFun(action) {
  if(action.style === 2) {
    action.postRedu.code = 0;
  } else {
    action.postRedu.code = 0;
    action.postRedu.inputThemeValue = '';
    action.postRedu.editorSelectValue = 'unclassified';
  }
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
  yield takeLatest('UPDATEINPUTTHEME_SAGA', fetchUpdateInputThemeFun);
  yield takeLatest('CLEARCODE_SAGA', fetchClearCodeFun);
  yield takeLatest('GETPOSTDATAS_SAGA', fetchPostDatasFun);
}

export default postSaga;