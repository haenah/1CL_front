import {call, put, take, takeLatest} from 'redux-saga/effects';
import api from '../api'
import * as actions from '../actions/Signup/index'
import * as types from '../actions/Signup/ActionTypes'

const url_user = 'http://127.0.0.1:8000/auth/register/'
const url_email = 'http://127.0.0.1:8000/auth/email/'
const url_id = 'http://127.0.0.1:8000/auth/id/'
const url_code = 'http://127.0.0.1:8000/auth/code/'

function* signUp(name,id,pw,email) {
    yield call(api.post, url_user, {name: name, username:id, password:pw, email:email})
}

function* sendEmail(email) {
    try {
        yield call(api.post, url_email, {email:email})
        yield put(actions.emailSent(1))

    } catch(e){
        yield put(actions.emailSent(2))
    }

}

function* confirmCode(code) {
    try {
        yield call(api.post, url_code, {code:code})
        yield put(actions.emailValidation(1))
    } catch(e){
        yield put(actions.emailValidation(2))
    }
}

function* confirmId(id) {
    try {
        yield call(api.post, url_id, {username:id})
        yield put(actions.idValidation(1))
    } catch(e){
        yield put(actions.idValidation(2))
    }
}

export default function* SignUpSaga () {
    yield takeLatest(types.SIGN_UP_REQUEST, signUp);
    yield takeLatest(types.CONFIRM_ID_REQUEST, confirmId);
    yield takeLatest(types.SEND_EMAIL_REQUEST, sendEmail);
    yield takeLatest(types.CONFIRM_CODE_REQUEST, confirmCode);
}
