import {fork, all} from 'redux-saga/effects'
import SignUpSaga from './SignUpSaga';
import LoginSaga from "./LoginSaga";
import ClubSearchSaga from './ClubSearchSaga';
import MainSaga from "./MainSaga";
import ClubRegisterSaga from './ClubRegisterSaga';

export default function* rootSaga() {
  yield all(
    [
      LoginSaga,
      SignUpSaga,
      ClubSearchSaga,
      ClubRegisterSaga,
      MainSaga,
    ].map(saga => fork(saga)));
}
