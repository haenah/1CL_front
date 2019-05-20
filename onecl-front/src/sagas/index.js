import {fork, all} from 'redux-saga/effects'
import SignUpSaga from './SignUpSaga';
import LoginSaga from "./LoginSaga";
import ClubSearchSaga from './ClubSearchSaga';
import MainSaga from "./MainSaga";

export default function* rootSaga() {
  yield all(
    [
      LoginSaga,
      SignUpSaga,
      ClubSearchSaga,
      MainSaga,
    ].map(saga => fork(saga)));
}
