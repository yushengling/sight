import { fork } from 'redux-saga/effects';
import homeSaga from './HomeSaga';
export default function* rootSagas () {
  yield [
    fork(homeSaga),
  ]
}