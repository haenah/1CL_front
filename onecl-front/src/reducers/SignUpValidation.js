import * as types from '../actions/ActionTypes'

const initialState = {
    idIsValid: false,
    emailIsValid: false,
    emailNotSended: true
}

const SignUpValidation = (state=initialState, action) => {
    switch (action.type) {
        case types.ID_VALIDATION:
            if(action.bool)
                return {
                    ...state,
                    idIsValid: true
                };
            else
                return {
                    ...state,
                    idIsValid: false
                }
        case types.EMAIL_VALIDATION:
            if(action.bool)
                return {
                    ...state,
                    emailIsValid: true
                };
            else
                return {
                    ...state,
                    emailIsValid: false
                };
        case types.EMAIL_NOT_SENDED:
            if(action.bool)
                return {
                    ...state,
                    emailNotSended: true
                };
            else
                return {
                    ...state,
                    emailNotSended: false
                };
        default:
            return state;
    }
}

export default SignUpValidation;
