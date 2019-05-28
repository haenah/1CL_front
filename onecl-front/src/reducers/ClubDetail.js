import * as types from '../actions/ClubDetail/ActionTypes'

const initialState = {
    documentList : [],
    memberList : [],
    infoPost : null,
    componentStatus : 0,
    authLevel: 0,
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

        case types.CHANGE_STATUS :
            return {
                ...state,
                componentStatus : action.flag,
            };
        default :
            return state;
    }
};

export default ClubDetail
