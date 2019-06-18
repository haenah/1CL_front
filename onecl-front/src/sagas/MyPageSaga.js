import {call, put, takeLatest} from 'redux-saga/effects'
import api from '../api'
import * as types from '../actions/MyPage/ActionTypes'
import {fetchJoin} from "../actions/MyPage";

const url = 'http://3.219.198.5:8000/join/my_club/';

export function* fetchJoinRequest() {

  const settings = {
    headers : {
      Authorization : 'token ' + sessionStorage.getItem('token'),
      'Content-type': 'application/json',
    }
  };

  try {
    const response = yield call(api.get, url, settings);
    if (response) {
      yield put(fetchJoin(response));
    }
  } catch (e) {
    console.log('Fetch Request Error: ', e.message)
  }
}

export default function* LoginSaga() {
  yield takeLatest(types.FETCH_JOIN_REQUEST, fetchJoinRequest);
}
