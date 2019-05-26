import * as types from '../actions/ClubDetail/ActionTypes'

const initialState = {
    documentList : [],
    memberList : [],
    infoPost : null
};

const ClubDetail = (state=initialState, action) => {
    switch (action.type){
        case types.UPDATE_INFO_POST :
            return {
                ...state,
                infoPost : action.infoPost
            };

        case types.UPDATE_DOCUMENT_LIST :
            return {
                ...state,
                documentList: action.documentList,
            };

        case types.UPDATE_MEMBER_LIST :
            return {
                ...state,
                memberList: action.memberList,
            };
        default :
            return state;
    }
};

export default ClubDetail
