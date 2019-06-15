import {take,put,call,fork} from 'redux-saga/effects';
import api from '../api'
import * as types from '../actions/ClubApply/ActionTypes'
import * as actions from '../actions/ClubApply/index'

const base_url = 'http://127.0.0.1:8000/';
const config = {
    headers : {
        'authorization' : 'token ' + sessionStorage.getItem('token'),
        'content-type' : 'application/json',
    }
};

function* getApplyMessage(clubID) {
    const url = base_url + `club/${clubID}`;
    try{
        let response;
        if(sessionStorage.getItem('token') === null) response = yield call(api.get, url);
        else response = yield call(api.get, url, config);
        yield put(actions.updateApplyMessage(response.apply_message))
    }catch (e) {
        console.log('get applymessage' + e);
    }
}

function* watchGetApplyMessageRequest(){
    while(true){
        const {clubID} = yield take(types.GET_APPLY_MESSAGE_REQUEST);
        yield call(getApplyMessage, clubID);
    }
}

export default function* ClubApplySaga() {
    yield fork(watchGetApplyMessageRequest);
}
