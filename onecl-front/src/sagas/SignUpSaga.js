import {take,put,call,fork} from 'redux-saga/effects';
import api from '../api'
import * as actions from '../actions'
import * as types from '../actions/ActionTypes'

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
        yield put(actions.emailSended(1))

    } catch(e){
        yield put(actions.emailSended(2))
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

function* watchSignUpRequest(){
    while(true){
        const {name,id,pw,email} = yield take(types.SIGN_UP_REQUEST)
        yield call(signUp,name,id,pw,email)
    }
}

function* watchSendEmailRequest(){
    while(true){
        const {email} = yield take(types.SEND_EMAIL_REQUEST)
        yield call(sendEmail,email)
    }
}

function* watchConfirmCodeRequest(){
    while(true){
        const {code} = yield take(types.CONFIRM_CODE_REQUEST)
        yield call(confirmCode,code)
    }
}

function* watchConfirmIdRequest(){
    while(true){
        const {id} = yield take(types.CONFIRM_ID_REQUEST)
        yield call(confirmId,id)
    }
}

export default function* SignUpSaga() {
    yield fork(watchSignUpRequest)
    yield fork(watchConfirmIdRequest)
    yield fork(watchSendEmailRequest)
    yield fork(watchConfirmCodeRequest)

}
