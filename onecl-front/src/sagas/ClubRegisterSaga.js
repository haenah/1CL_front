import {take,put,call,fork} from 'redux-saga/effects';
import api from '../api'
import * as types from '../actions/ClubRegister/ActionTypes'
import * as actions from '../actions/ClubRegister/index'
import {fetchClubListRequest} from '../sagas/MainSaga';
import {REQUEST_URL} from "../Constants/Constants";

const url_postClub = `${REQUEST_URL}/club/`;

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
        yield put(actions.setRegisterFlag(true));
        yield call(fetchClubListRequest);
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
