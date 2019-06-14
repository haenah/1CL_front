import {take,put,call,fork} from 'redux-saga/effects';
import api from '../api'
import * as types from '../actions/ClubApply/ActionTypes'
import * as actions from '../actions/ClubApply/index'

function* getApplyMessage(clubID) {
    const url = '/*TODO*/';
    const applyMessage = api.get(url);
    yield put(actions.updateApplyMessage(applyMessage))
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
