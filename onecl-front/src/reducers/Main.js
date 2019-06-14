import * as types from '../actions/Main/ActionTypes'

const initialState = {
  clubList: null,
};

const Main = (state=initialState, action) => {
  switch(action.type) {
    case types.FETCH_CLUB_LIST:
      return {
        ...state,
        clubList: action.clubList,
      };
    default:
      return initialState;
  }
};

export default Main;
