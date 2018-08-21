import { call, put, takeEvery, takeLatest, delay } from 'redux-saga/effects';

import { fetchAvatar, fetchGetPostDetail } from '../servers/postDetail';

function* fetchAvatarFun(action) {
  let data = yield call(fetchAvatar);
  let detail = yield call(fetchGetPostDetail, action.postId);
  detail = detail.list;
  let list = {};
  ({ list: list.userName = data.userName, list: list.avatar = data.avatar, list: list.browse = detail.browse, list: list.classification = detail.classification, list: list.editor_value = detail.editor_value, list: list.reply = detail.reply, list: list.theme = detail.theme, list: list.user = detail.user } = {});
  yield put({
    type: 'POSTDETAILREDU',
    list,
  });
}

function* postDetailSaga() {
  yield takeLatest('GETPOSTDETAIL_SAGA', fetchAvatarFun);
}

export default postDetailSaga;