import * as types from '../actions/Login/ActionTypes'

const initialState = {
  user: {
  },
  token: null,
};


const Login = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        user: action.user,
        token: action.token,
      };
    case types.LOGIN_REQUEST:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default Login;

