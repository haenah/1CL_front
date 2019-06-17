import * as types from './ActionTypes'

export const updateMessageList = (messageList) => {
    return{
        type: types.UPDATE_MESSAGE_LIST,
        messageList,
    }
};
