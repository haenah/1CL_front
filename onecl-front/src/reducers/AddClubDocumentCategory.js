import * as types from '../actions/AddClubDocumentCategory/ActionTypes';

const initialState = {
  doc_type_list: null,
  doc_type: null,
};

const AddClubDocumentCategory = (state=initialState, action) => {
  switch(action.type) {
    case types.REMOVE_DOCUMENT_CATEGORY_SUCCESS:
      return {
        ...state,
      };
    case types.ADD_DOCUMENT_CATEGORY_SUCCESS:
      return {
        ...state,
        doc_type: action.doc_type,
      };
    case types.FETCH_CATEGORY_LIST_SUCCESS:
      return {
        ...state,
        doc_type_list: action.doc_type_list,
      };
    default:
      return initialState;
  }
};

export default AddClubDocumentCategory;
