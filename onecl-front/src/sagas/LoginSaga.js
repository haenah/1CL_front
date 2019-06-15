import {call, put, takeLatest} from 'redux-saga/effects'
import api from '../api'
import * as types from '../actions/Login/ActionTypes'
import {loginRequestSuccess} from "../actions/Login";
import {REQUEST_URL} from "../Constants/Constants";

const url = `${REQUEST_URL}/auth/login/`;

export function* loginRequest(user) {
  const data = {
    username: user.username,
    password: user.password,
  };
  try {
    const response = yield call(api.post, url, data);
    if (response) {
      yield put(loginRequestSuccess(response));
      sessionStorage.setItem('token', response.token);
    }
  } catch (e) {
    alert('로그인에 실패했습니다. 정보를 확인해주세요.');
    console.log('Login Request Error: ', e.message)
  }
}

export default function* LoginSaga() {
  yield takeLatest(types.LOGIN_REQUEST, loginRequest);
}



