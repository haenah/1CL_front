import {call, put, take, takeLatest, fork} from 'redux-saga/effects';
import api from '../api';
import * as actions from '../actions/Main/index';
import * as types from '../actions/Main/ActionTypes';
import {REQUEST_URL} from "../Constants/Constants";

const url = `${REQUEST_URL}/club/?limit=1000`;

export function* fetchClubListRequest() {
  const data = yield call(api.get, url);
  console.log(data);
  if (data) {
    yield put(actions.fetchClubList(data));
    }
}

export function* watchClubListRequest(){
  while(true){
      yield take(types.FETCH_CLUB_LIST_REQUEST);
      yield call(fetchClubListRequest);
  }
}

export default function* MainSaga() {
  // yield takeLatest(types.FETCH_CLUB_LIST_REQUEST, fetchClubListRequest);
  //   yield take(types.FETCH_CLUB_LIST)
  yield fork(watchClubListRequest)
}
