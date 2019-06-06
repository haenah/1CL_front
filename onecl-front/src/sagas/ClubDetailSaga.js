import {take,put,call,fork} from 'redux-saga/effects';
import api from '../api'
import * as types from '../actions/ClubDetail/ActionTypes'
import * as actions from '../actions/ClubDetail/index'

function* getDocumentList(id) {
    /*TODO*/
}

function* watchGetDocListRequest(){
    while(true){
        const {id} = yield take(types.GET_DOCUMENT_LIST_REQUEST);
        yield call(getDocumentList, id);
    }
}

function* getMemberList(id) {
    /*TODO*/
}

function* watchGetMemListRequest(){
    while(true){
        const {id} = yield take(types.GET_MEMBER_LIST_REQUEST);
        yield call(getMemberList, id);
    }
}

function* getAuthLevel(id) {
    /*TODO*/
}

function* watchGetAuthLevelRequest(){
    while(true){
        const {id} = yield take(types.GET_AUTH_LEVEL_REQUEST);
        yield call(getAuthLevel, id);
    }
}

function* getInfoPost(id) {
    /*TODO*/
}

function* watchGetInfoPostRequest(){
    while(true){
        const {id} = yield take(types.GET_INFO_POST_REQUEST);
        yield call(getInfoPost, id);
    }
}

function* submitDocument(title, content) {
    /*TODO*/
}

function* watchSubmitDocumentRequest(){
    while(true){
        const {title, content} = yield take(types.SUBMIT_DOCUMENT_REQUEST);
        yield call(submitDocument, title, content);
    }
}

export default function* ClubDetailSaga() {
    yield fork(watchGetDocListRequest);
    yield fork(watchGetMemListRequest);
    yield fork(watchGetAuthLevelRequest);
    yield fork(watchGetInfoPostRequest);
    yield fork(watchSubmitDocumentRequest);
}
