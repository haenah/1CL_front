import {take,put,call,fork} from 'redux-saga/effects';
import api from '../api'
import * as types from '../actions/ClubRegister/ActionTypes'
import * as actions from '../actions/ClubRegister/index'

const url_postClub = 'http://127.0.0.1:8000/club/';

function* clubRegister(clubName, department, category){
    const data = {
        name : clubName,
        category : category,
        dept : department,
    };

    const settings = {
        headers : {
            Authorization : 'token ' + sessionStorage.getItem('token'),
            'Content-type': 'application/json',
        }
    };

    try{
        yield call(api.post, url_postClub, data, settings);
        yield put(actions.registerSuccess());
    } catch(e) {
        alert("동아리 등록 실패 : " + e.message);
    }
}

function* watchClubRegisterRequest(){
    while(true){
        const {clubName, department, category} = yield take(types.CLUB_REGISTER_REQUEST);
        yield call(clubRegister, clubName, department, category)
    }
}

export default function* ClubRegisterSaga() {
    yield fork(watchClubRegisterRequest);
}
