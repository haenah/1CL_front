import {take,put,call,fork} from 'redux-saga/effects';
import api from '../api'
import * as types from '../actions/FixClubPost/ActionTypes'
import * as actions from '../actions/FixClubPost/index'

const base_url = 'http://3.219.198.5:8000/';
const config = {
    headers : {
        'authorization' : 'token ' + sessionStorage.getItem('token'),
        'content-type' : 'application/json',
    }
};

function* putIntro(id, content) {
    const url = base_url + `club/${id}/`;
    const data = {
        intro : content,
    };
    try{
        const response = yield call(api.put, url, data, config);
        console.log(response);
    }catch (e) {
        console.log('put intro :' + e);
    }

}

function* watchPutIntroRequest(){
    while(true){
        const {id, content} = yield take(types.PUT_INTRO_REQUEST);
        yield call(putIntro, id, content);
    }
}

export default function* FixClubPostSaga() {
    yield fork(watchPutIntroRequest);
}
