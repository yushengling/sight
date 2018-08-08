import { fork } from 'redux-saga/effects';
import homeSaga from './HomeSaga';
import userSaga from './UserSaga';
import personalSaga from './PersonalSaga';
import settingSaga from './SettingSaga';
import detailSaga from './DetailSaga';
import postSaga from './PostSaga';
export default function* rootSagas () {
  yield [
    fork(homeSaga),
    fork(userSaga),
    fork(personalSaga),
    fork(settingSaga),
    fork(detailSaga),
    fork(postSaga)
  ]
}