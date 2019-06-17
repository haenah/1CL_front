import * as types from '../actions/Message/ActionTypes';

const initialState = {
    messageList : [],
};

const Message = (state=initialState, action) => {
    switch(action.type) {
        case types.UPDATE_MESSAGE_LIST :
            return{
                ...state,
                messageList: action.messageList,
            };
        default:
            return initialState;
    }
};

export default Message;
