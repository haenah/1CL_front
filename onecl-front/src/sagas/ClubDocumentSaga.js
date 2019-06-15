import {call, fork, put, take} from 'redux-saga/effects';
import api from '../api'
import * as actions from '../actions/ClubDetail/index'
import * as types from '../actions/ClubDetail/ActionTypes'
import {reduxActions, Types} from '../actions/ClubDetail/index';
import {REQUEST_URL} from "../Constants/Constants";

const settings = {
  headers : {
    Authorization : 'token ' + sessionStorage.getItem('token'),
    'Content-type': 'application/json',
  }
};

function* getDocumentRequest(url) {

  try {
    const response = yield call(api.get, url, settings);
    if (response) {
      yield put(reduxActions.getDocumentSuccess(response));
    }
  } catch (e) {
    alert('존재하지 않거나 읽을 권한이 없는 게시물입니다.');
    yield put(reduxActions.getDocumentFailure(e.message));
  }
}

function* watchGetDocumentRequest() {
  while(true){
    const {docID} = yield take(Types.GET_DOCUMENT_REQUEST);
    const url = `${REQUEST_URL}/document/${docID}/`;
    yield call(getDocumentRequest, url);
  }
}

function* addCommentRequest(data) {
  const url = `${REQUEST_URL}/document/comment/`;
  try {
    const response = yield call(api.post, url, data, settings);
    console.log(data);
    yield put(actions.addComment(response));
    yield call(getDocumentRequest, `${REQUEST_URL}/document/${data.document}`);
  } catch(e) {
    alert('댓글 달기에 실패했습니다. 다시 시도해주세요.');
    console.log('ADD COMMENT ERROR: ', e.message);
  }
}

function* watchAddCommentRequest() {
  while(true) {
    const data = yield take(types.ADD_COMMENT_REQUEST);
    yield call(addCommentRequest,data);
  }
}

export default function* ClubDocumentSaga() {
  yield fork(watchGetDocumentRequest);
  yield fork(watchAddCommentRequest);
}
