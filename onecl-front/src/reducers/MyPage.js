import * as types from '../actions/MyPage/ActionTypes';

const initialState = {
  join: null,
};

const MyPage = (state = initialState, action) => {
  switch(action.type) {
    case types.FETCH_JOIN:
      return {
        ...state,
        joinList: action.joinList,
      };
    default:
      return initialState;
  }
};

export default MyPage;
