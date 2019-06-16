import * as types from './ActionTypes';

export const removeDocumentCategorySuccess = () => ({
  type: types.REMOVE_DOCUMENT_CATEGORY_SUCCESS,
});
export const removeDocumentCategoryRequest = (categoryID, clubID) => ({
  type: types.REMOVE_DOCUMENT_CATEGORY_REQUEST,
  categoryID,
  clubID,
});

export const addDocumentCategorySuccess = (payload) => ({
  type: types.ADD_DOCUMENT_CATEGORY_SUCCESS,
  doc_type: payload,
});
export const addDocumentCategoryRequest = (name, club) => ({
  type: types.ADD_DOCUMENT_CATEGORY_REQUEST,
  name,
  club,
});

export const fetchCategoryListSuccess = (payload) => ({
  type: types.FETCH_CATEGORY_LIST_SUCCESS,
  doc_type_list: payload,
});

export const fetchCategoryListRequest = (clubID) => ({
  type: types.FETCH_CATEGORY_LIST_REQUEST,
  clubID,
});
