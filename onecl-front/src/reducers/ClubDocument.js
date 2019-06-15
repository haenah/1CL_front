import * as types from '../actions/ClubDetail/ActionTypes'
import {Types} from '../actions/ClubDetail/index';

const initialState = {
  isFetching: false,
  errorMessage: '',
  addCommentSuccess: false,
};

const ClubDocument = (state=initialState, action) => {
  switch (action.type) {
    case Types.GET_DOCUMENT_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case Types.GET_DOCUMENT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        document: {...action.payload},
      };
    case Types.GET_DOCUMENT_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.errorMessage,
      };
    case types.ADD_COMMENT:
      return {
        ...state,
        addCommentSuccess: true,
        comment: action.comment,
      };
    default:
      return state;
  }
};

export default ClubDocument;
