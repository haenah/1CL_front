import * as types from '../actions/ClubApply/ActionTypes'

const initialState = {
    applyMessage : null,
};

const ClubApply = (state=initialState, action) => {
    switch (action.type){
        case types.UPDATE_APPLY_MESSAGE :
            return{
                ...state,
                applyMessage: action.applyMessage,
            };
        default :
            return state;
    }
};

export default ClubApply
