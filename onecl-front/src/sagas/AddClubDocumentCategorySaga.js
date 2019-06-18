import {take, put, call, fork} from 'redux-saga/effects';
import api from '../api';
import * as types from '../actions/AddClubDocumentCategory/ActionTypes';
import * as actions from '../actions/AddClubDocumentCategory/index';

const settings = {
  headers : {
    'authorization' : 'token ' + sessionStorage.getItem('token'),
    'content-type' : 'application/json',
  }
};

function* fetchCategoryList(clubID) {
  const url = `http://3.219.198.5:8000/document/doc_type/?club=${clubID}`;
  try {
    const response = yield call(api.get, url, settings);
    if (response) {
      yield put(actions.fetchCategoryListSuccess(response));
    }
  } catch(e) {
    console.log('FETCH CATEGORY LIST ERROR: ', e.message);
  }
}

function* watchFetchCategoryList() {
  while(true) {
    const {clubID} = yield take(types.FETCH_CATEGORY_LIST_REQUEST);
    yield call(fetchCategoryList, clubID);
  }
}

function* removeClubDocumentCategory(data) {
  const url = `http://3.219.198.5:8000/document/doc_type/${data.categoryID}`;
  try {
    yield call(api.delete, url, settings);
    yield put(actions.removeDocumentCategorySuccess());
    yield call(fetchCategoryList, data.clubID);
    alert('게시판을 성공적으로 삭제했습니다.');
  } catch (e) {
    alert('게시판을 삭제하지 못했습니다. 잠시 후 다시 시도해주세요.');
    console.log('REMOVE CATEGORY ERR ', e.message);
  }
}

function* watchRemoveClubDocumentCategory() {
  while(true) {
    const data = yield take(types.REMOVE_DOCUMENT_CATEGORY_REQUEST);
    yield call(removeClubDocumentCategory, data);
  }
}

function* addClubDocumentCategory(data) {
  const url = `http://3.219.198.5:8000/document/doc_type/`;
  try {
    const response = yield call(api.post, url, data, settings);
    yield put(actions.addDocumentCategorySuccess(response));
    yield call(fetchCategoryList, data.club);
    alert('게시판을 성공적으로 추가했습니다.');
  } catch (e) {
    alert('게시판 추가를 실패했습니다. 잠시 후 다시 시도해주세요.');
    console.log('ADD CATEGORY ERR: ', e.message);
  }
}

function* watchAddClubDocumentCategory() {
  while (true) {
    const data = yield take(types.ADD_DOCUMENT_CATEGORY_REQUEST);
    yield call(addClubDocumentCategory, data);
  }
}

export default function* AddClubDocumentCategorySaga() {
  yield fork(watchAddClubDocumentCategory);
  yield fork(watchRemoveClubDocumentCategory);
  yield fork(watchFetchCategoryList);
}
