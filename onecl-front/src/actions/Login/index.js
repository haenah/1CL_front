import * as types from './ActionTypes'

export const loginRequest = (user) => {
  return {
    type: types.LOGIN_REQUEST,
    username: user.username,
    password: user.password,
  }
};

export const loginRequestSuccess = (payload) => {
  sessionStorage.setItem('token', payload.token);
  return {
    type: types.LOGIN_REQUEST_SUCCESS,
    user: payload.user,
    token: payload.token,
  }
};
