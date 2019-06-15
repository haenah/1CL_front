import * as types from '../actions/ClubDetail/ActionTypes'

const initialState = {
  document: null,
};

const ClubRegister = (state=initialState, action) => {
  switch (action.type) {
    case types.GET_DOCUMENT:
      return {
        ...state,
        document: action.document,
      };
    default:
      return state;
  }
};

export default ClubRegister;
