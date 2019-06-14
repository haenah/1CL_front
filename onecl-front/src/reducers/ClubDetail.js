import * as types from '../actions/ClubDetail/ActionTypes'

const initialState = {
    documentList : [],
    memberList : [],
    infoPost : null,
    componentStatus : 0,
    authLevel: 0,
    visualize : false,
    authChange_clubID : 0,
    authChange_memberID : 0,
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

        case types.UPDATE_AUTH_LEVEL :
            return {
                ...state,
                authLevel : action.authLevel,
            };

        case types.CHANGE_STATUS :
            return {
                ...state,
                componentStatus : action.flag,
            };

        case types.AUTH_CHANGE_MODAL_VISUALIZE :
            return {
                ...state,
                visualize : true,
                authChange_clubID: action.clubID,
                authChange_memberID: action.memberID,
            };

        case types.REMOVE_MODAL :
            return {
                ...state,
                visualize : false,
                authChange_clubID: 0,
                authChange_memberID: 0,
            };

        default :
            return state;
    }
};

export default ClubDetail
