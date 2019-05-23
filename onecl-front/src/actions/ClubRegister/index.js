import * as types from './ActionTypes';

export const clubRegisterRequest = (clubName, department, category) => {
    return {
        type : types.CLUB_REGISTER_REQUEST,
        clubName,
        department,
        category,
    }
};

export const registerSuccess = () => {
    return {
        type : types.CLUB_REGISTER_SUCCESS,
    }
};

export const setRegisterFlag = (bool) => {
    return {
        type : types.SET_REGISTER_FLAG,
        bool,
    }
};
