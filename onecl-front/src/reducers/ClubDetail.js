import * as types from '../actions/ClubDetail/ActionTypes'

const initialState = {
    documentList : [],
    memberList : [],
    docTypeList : [],
    infoPost : null,
    componentStatus : 0,
    authLevel: 0,
    visualize : false,
    authChange_joinID : 0,
    authChange_username : null,
    authChange_clubID: 0,
    post_complete: false,
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
                authChange_joinID: action.joinID,
                authChange_username: action.username,
            };

        case types.UPDATE_DOC_TYPE_LIST :
            return {
                ...state,
                docTypeList: action.docTypeList,
            };

        case types.REMOVE_MODAL :
            return {
                ...state,
                visualize : false,
                authChange_clubID: 0,
                authChange_memberID: 0,
            };

        case types.FINISH_POST :
            return {
                ...state,
                post_complete: true,
            };

        case types.START_POST :
            return {
                ...state,
                post_complete: false,
            };

        default :
            return state;
    }
};

export default ClubDetail
