import {call, takeLatest, put, take} from 'redux-saga/effects';
import api from '../api'
import * as actions from '../actions/ClubDetail/index'
import * as types from '../actions/ClubDetail/ActionTypes'
import {REQUEST_URL} from "../Constants/Constants";

function* getDocumentRequest() {
  const {clubID, docID} = yield take(types.GET_DOCUMENT_REQUEST);
  const url = `${REQUEST_URL}/document/?clubID=${clubID}&docID=${docID}/`;
  try {
    const response = yield call (api.get, url);
    if (response) {
      yield put(actions.getDocument(response));
    }
  } catch (e) {
    console.log('Document GET Error: ', e.message);
  }
}

export default function* ClubDocumentSaga() {
  takeLatest(types.GET_DOCUMENT_REQUEST, getDocumentRequest);
}
