import {fork, all} from 'redux-saga/effects'
import SignUpSaga from './SignUpSaga';
import LoginSaga from "./LoginSaga";
import ClubSearchSaga from './ClubSearchSaga';

export default function* rootSaga() {
  yield all(
    [
      LoginSaga,
      SignUpSaga,
      ClubSearchSaga,
    ].map(saga => fork(saga)));
}
