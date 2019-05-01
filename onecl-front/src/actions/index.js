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

export const idValidation = (bool) => {
    return {
        type: types.ID_VALIDATION,
        bool
    }
}

export const emailValidation = (bool) => {
    return {
        type: types.EMAIL_VALIDATION,
        bool
    }
}

export const emailNotSended = (bool) => {
    return {
        type: types.EMAIL_NOT_SENDED,
        bool
    }
}