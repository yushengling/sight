import { call, put, takeLatest } from 'redux-saga/effects';

import { fetchAvatar } from '../servers/layoutHead';

function* fetchAvatarFun(action) {
  let datas = yield call(fetchAvatar);
  yield put({
    type: 'LAYOUTHEADREDU',
    datas,
  });
}

function* layoutHeadSaga() {
  yield takeLatest('GETAVATAR_SAGA', fetchAvatarFun);
}

export default layoutHeadSaga;