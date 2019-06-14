import * as types from './ActionTypes';

export const getApplyMessageRequest = (clubID) => {
    return{
        type : types.GET_APPLY_MESSAGE_REQUEST,
        clubID
    }
};

export const updateApplyMessage = (applyMessage) => {
    return{
        type : types.UPDATE_APPLY_MESSAGE,
        applyMessage,
    }
};
