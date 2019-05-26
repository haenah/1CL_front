import {take,put,call,fork} from 'redux-saga/effects';
import api from '../api'
import * as types from '../actions/ClubDetail/ActionTypes'
import * as actions from '../actions/ClubDetail/index'

function* getDocumentList(id) {

}

function* watchGetDocListRequest(){
    while(true){
        const {id} = yield take(types.GET_DOCUMENT_LIST_REQUEST);
        yield call(getDocumentList, id);
    }
}

function* getMemberList(id) {

}

function* watchGetMemListRequest(){
    while(true){
        const {id} = yield take(types.GET_MEMBER_LIST_REQUEST);
        yield call(getMemberList, id);
    }
}

function* getAuthLevel(id) {

}

function* watchGetAuthLevelRequest(){
    while(true){
        const {id} = yield take(types.GET_AUTH_LEVEL_REQUEST);
        yield call(getAuthLevel, id);
    }
}

function* getInfoPost(id) {

}

function* watchGetInfoPostRequest(){
    while(true){
        const {id} = yield take(types.GET_INFO_POST_REQUEST);
        yield call(getInfoPost, id);
    }
}

export default function* ClubRegisterSaga() {
    yield fork(watchGetDocListRequest);
    yield fork(watchGetMemListRequest);
    yield fork(watchGetAuthLevelRequest);
    yield fork(watchGetInfoPostRequest);
}
