import * as types from '../actions/Login/ActionTypes'

const initialState = {
  user: {
  },
  token: '',
  logged : false,
};


const Login = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        user: action.user,
        token: action.token,
        logged: true,
      };
    case types.LOGIN_REQUEST:
      return {
        ...state,
        user: action.user,
        logged: false,
      };
    default:
      return state
  }
};

export default Login;

