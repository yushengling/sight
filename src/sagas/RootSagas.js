import { fork } from 'redux-saga/effects';
import homeSaga from './HomeSaga';
import userSaga from './UserSaga';
import personalSaga from './PersonalSaga';
import settingSaga from './SettingSaga';
import detailSaga from './DetailSaga';
export default function* rootSagas () {
  yield [
    fork(homeSaga),
    fork(userSaga),
    fork(personalSaga),
    fork(settingSaga),
    fork(detailSaga)
  ]
}