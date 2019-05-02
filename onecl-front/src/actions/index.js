import * as types from './ActionTypes'

export const signUpRequest = (name,id,pw,email) => {
    return {
        type: types.SIGN_UP_REQUEST,
        name,
        id,
        pw,
        email
    }
}

export const confirmIdRequest = (id) => {
    return {
        type: types.CONFIRM_ID_REQUEST,
        id
    }
}

export const sendEmailRequest = (email) => {
    return {
        type: types.SEND_EMAIL_REQUEST,
        email
    }
}

export const confirmCodeRequest = (code) => {
    return {
        type: types.CONFIRM_CODE_REQUEST,
        code
    }
}

// 0: nothing done 1: success 2: fail

export const idValidation = (status) => {
    return {
        type: types.ID_VALIDATION,
        status
    }
}

export const emailValidation = (status) => {
    return {
        type: types.EMAIL_VALIDATION,
        status
    }
}

export const emailSended = (status) => {
    return {
        type: types.EMAIL_SENDED,
        status
    }
}
