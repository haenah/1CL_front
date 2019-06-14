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
    const url = `http://127.0.0.1:8000/join/?club=${id}&auth_level=1`;
    const config = {
        headers : {
            'authorization' : 'token ' + sessionStorage.getItem('token')
        }
    };
    try{
        const response = yield call(api.get, url, config);
        yield put(actions.updateMemberList(response))
    } catch (e) {
        console.log(e)
    }
}

function* watchGetMemListRequest(){
    while(true){
        const {id} = yield take(types.GET_MEMBER_LIST_REQUEST);
        yield call(getMemberList, id);
    }
}

function* getAuthLevel(id) {
    const url = `http://127.0.0.1:8000/join/auth_level/?club=${id}`;
    const config = {
        headers : {
            'authorization' : 'token ' + sessionStorage.getItem('token')
        }
    };
    try{
        const response = yield call(api.get, url, config);
        console.log(response);
        yield put(actions.updateAuthLevel(response.auth_level))
    }catch (e) {
        alert(e)
    }
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

function* searchDocument(category) {
    /*TODO*/
}

function* watchSearchDocumentRequest(){
    while(true){
        const {category} = yield take(types.SEARCH_DOCUMENT_REQUEST);
        yield call(searchDocument, category);
    }
}

function* changeAuthLevel(clubID, memberID, authLevel) {
    /*TODO*/
}

function* watchChangeAuthLevelRequest(){
    while(true){
        const {clubID, memberID, authLevel} = yield take(types.CHANGE_AUTH_LEVEL_REQUEST);
        yield call(changeAuthLevel, clubID, memberID, authLevel)
    }
}

export default function* ClubDetailSaga() {
    yield fork(watchGetDocListRequest);
    yield fork(watchGetMemListRequest);
    yield fork(watchGetAuthLevelRequest);
    yield fork(watchGetInfoPostRequest);
    yield fork(watchSubmitDocumentRequest);
    yield fork(watchSearchDocumentRequest);
    yield fork(watchChangeAuthLevelRequest);
}
