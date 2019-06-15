import {fork, all} from 'redux-saga/effects'
import SignUpSaga from './SignUpSaga';
import LoginSaga from "./LoginSaga";
import ClubSearchSaga from './ClubSearchSaga';
import MainSaga from "./MainSaga";
import ClubRegisterSaga from './ClubRegisterSaga';
import ClubDetailSaga from './ClubDetailSaga';
import ClubApplySaga from './ClubApplySaga';
import MyPageSaga from "./MyPageSaga";
import ClubDocumentSaga from "./ClubDocumentSaga";

export default function* rootSaga() {
  yield all(
    [
        LoginSaga,
        SignUpSaga,
        ClubSearchSaga,
        ClubRegisterSaga,
        MainSaga,
        ClubDetailSaga,
        ClubApplySaga,
        MyPageSaga,
        ClubDocumentSaga,
    ].map(saga => fork(saga)));
}
