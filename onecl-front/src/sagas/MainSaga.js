import {call, put, takeLatest} from 'redux-saga/effects';
import api from '../api';
import * as actions from '../actions/Common/index';
import * as types from '../actions/Common/ActionTypes';

const url = 'http://127.0.0.1:8000/club/';

function* getClubList() {
  const data = yield call(api.get, url);
  yield put (actions.getClubList(data));
}

//TODO
function* clubSearchRequest() {
}

export default function* MainSaga() {
  yield takeLatest(types.GET_CLUB_LIST_REQUEST, getClubList)
}
