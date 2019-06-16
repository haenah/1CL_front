import {take,put,call,fork} from 'redux-saga/effects';
import api from '../api'
import * as types from '../actions/ClubDetail/ActionTypes'
import * as actions from '../actions/ClubDetail/index'
const global_config = {
    headers :{
        'authorization' : 'token ' + sessionStorage.getItem('token'),
        'content-type' : 'application/json'
    }
};

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
        console.log('getmberlist :' + e)
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
        let response;
        if(sessionStorage.getItem('token') === null) response = yield call(api.get, url);
        else response = yield call(api.get, url, config);
        console.log(response);
        yield put(actions.updateAuthLevel(response.auth_level))
    }catch (e) {
        console.log('get auth level : ' + e)
    }
}

function* watchGetAuthLevelRequest(){
    while(true){
        const {id} = yield take(types.GET_AUTH_LEVEL_REQUEST);
        yield call(getAuthLevel, id);
    }
}

function* getInfoPost(id) {
    const url = `http://127.0.0.1:8000/club/${id}`;
    try{
        let response;
        if(sessionStorage.getItem('token') === null) response = yield call(api.get, url);
        else response = yield call(api.get, url, global_config);
        console.log(response);
        yield put(actions.updateInfoPost(response.intro));
    }catch (e) {
        console.log('get intro :' + e)
    }
}

function* watchGetInfoPostRequest(){
    while(true){
        const {id} = yield take(types.GET_INFO_POST_REQUEST);
        yield call(getInfoPost, id);
    }
}

function* submitDocument(title, content, docType, clubID) {
    const url = 'http://127.0.0.1:8000/document/';
    const data = {
        title : title,
        content : content,
        type : docType,
        club : clubID,
    };
    console.log(data);
    const config = {
        headers : {
            authorization : 'token ' + sessionStorage.getItem('token'),
            'content-type' : 'application/json',
        }
    };
    try{
        yield call(api.post, url, data, config);
        yield put(actions.finishPost());
        yield put(actions.searchDocumentRequest('all',clubID));
    } catch (e) {
        alert(e)
    }
}

function* watchSubmitDocumentRequest(){
    while(true){
        const {title, content, docType, clubID} = yield take(types.SUBMIT_DOCUMENT_REQUEST);
        yield call(submitDocument, title, content, docType, clubID);
    }
}

function* searchDocument(category, clubID) {
    const url = `http://127.0.0.1:8000/document/?club=${clubID}&type=${category}`;
    const config = {
        headers:{
            'authorization' : 'token ' + sessionStorage.getItem('token')
        }
    };
    try{
        const data = yield call(api.get, url, config);
        console.log(data);
        yield put(actions.updateDocumentList(data.results));
    }catch (e) {
        console.log('search document : ' + e);
    }
}

function* watchSearchDocumentRequest(){
    while(true){
        const {category, clubID} = yield take(types.SEARCH_DOCUMENT_REQUEST);
        yield call(searchDocument, category, clubID);
    }
}

function* changeAuthLevel(joinID, authLevel) {
    const url = `http://127.0.0.1:8000/join/${joinID}/`;
    console.log(authLevel);
    const data = {
        auth_level : authLevel,
    };
    try{
        yield call(api.put, url, data, global_config)

    }catch (e) {
        console.log('auth change error :' + e)
    }
}

function* watchChangeAuthLevelRequest(){
    while(true){
        const {joinID, authLevel} = yield take(types.CHANGE_AUTH_LEVEL_REQUEST);
        console.log('here join id is' + joinID);
        yield call(changeAuthLevel, joinID, authLevel)
    }
}

function* getDocTypeList(id){
    const url = `http://127.0.0.1:8000/document/doc_type/?club=${id}`;
    try{
        const data = yield call(api.get, url, global_config);
        console.log(data);
        yield put(actions.updateDocTypeList(data.results))
    }catch (e) {
        console.log('getdoctypeList error : ' + e)
    }
}

function* watchGetDocTypeListRequest(){
    while(true){
        const {id} = yield take(types.GET_DOC_TYPE_LIST_REQUEST);
        yield call(getDocTypeList, id)
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
    yield fork(watchGetDocTypeListRequest);
}
