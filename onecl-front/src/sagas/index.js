import {fork, all} from 'redux-saga/effects'
import SignUpSaga from './SignUpSaga';
import LoginSaga from "./LoginSaga";

export default function* rootSaga() {
  yield all(
    [
      LoginSaga,
      SignUpSaga,
    ].map(saga => fork(saga)));
}
