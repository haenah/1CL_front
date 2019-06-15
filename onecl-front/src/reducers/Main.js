import * as types from '../actions/Main/ActionTypes';
import * as login from '../actions/Login/ActionTypes';

const initialState = {
  clubList: null,
  login: null,
};

const Main = (state=initialState, action) => {
  switch(action.type) {
    case types.FETCH_CLUB_LIST:
      return {
        ...state,
        clubList: action.clubList,
      };
    case login.LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        login: action.user,
      };
    default:
      return initialState;
  }
};

export default Main;
