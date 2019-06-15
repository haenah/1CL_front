import {call, put, takeLatest} from 'redux-saga/effects';
import api from '../api';
import * as actions from '../actions/Main/index';
import * as types from '../actions/Main/ActionTypes';

const url = 'http://127.0.0.1:8000/club/';

function* fetchClubListRequest() {
  const data = yield call(api.get, url);
  if (data) {
    yield put(actions.fetchClubList(data));
    }
}

export default function* MainSaga() {
  yield takeLatest(types.FETCH_CLUB_LIST_REQUEST, fetchClubListRequest)
}
