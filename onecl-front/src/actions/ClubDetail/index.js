import * as types from './ActionTypes';
import {WAIT_FOR_ACTION, ERROR_ACTION} from "redux-wait-for-action";
import {createActions} from "reduxsauce";

export const getDocumentListRequest = (id) => {
    return {
        type : types.GET_DOCUMENT_LIST_REQUEST,
        id
    }
};

export const getMemberListRequest = (id) => {
    return {
        type : types.GET_MEMBER_LIST_REQUEST,
        id
    }
};

export const getInfoPostRequest = (id) => {
    return {
        type : types.GET_INFO_POST_REQUEST,
        id
    }
};

export const getAuthLevelRequest = (id) => {
    return {
        type : types.GET_AUTH_LEVEL_REQUEST,
        id
    }
};

export const submitDocumentRequest = (title, content, docType, clubID) => {
    return {
        type : types.SUBMIT_DOCUMENT_REQUEST,
        title,
        content,
        docType,
        clubID
    }
};

// export const getDocumentRequest = (docID) => ({
//     type: types.GET_DOCUMENT_REQUEST,
//     docID,
// });

export const {Types, Creators} = createActions({
   getDocumentRequest: ['docID', {[WAIT_FOR_ACTION]: types.GET_DOCUMENT_SUCCESS, [ERROR_ACTION]: types.GET_DOCUMENT_FAILURE}],
   getDocumentSuccess: ['payload'],
   getDocumentFailure: ['errorMessage'],
});

export const reduxActions = Creators;

// export const getDocument = (document) => ({
//     type: types.GET_DOCUMENT,
//     document,
//     [WAIT_FOR_ACTION]: types.GET_DOCUMENT_SUCCESS,
//     [ERROR_ACTION]: types.GET_DOCUMENT_FAILURE,
// });
//
// export const getDocumentSuccess = (payload) => ({
//    type: types.GET_DOCUMENT_SUCCESS,
//    payload,
// });
//
// export const getDocumentFailure = (error) => ({
//     type: types.GET_DOCUMENT_FAILURE,
//     error,
// });

export const addComment = (comment) => {
    return {
        type: types.ADD_COMMENT,
        comment,
    }
};

export const addCommentRequest = (document, content) => {
    return {
        type: types.ADD_COMMENT_REQUEST,
        document,
        content,
    }
};

export const changeStatus = (flag) => {
    return {
        type : types.CHANGE_STATUS,
        flag
    }
};

export const updateDocumentList = (documentList) => {
    return {
        type: types.UPDATE_DOCUMENT_LIST,
        documentList,
    }
};

export const updateMemberList = (memberList) => {
    return {
        type: types.UPDATE_MEMBER_LIST,
        memberList,
    }
};

export const updateInfoPost = (infoPost) => {
    return {
        type: types.UPDATE_INFO_POST,
        infoPost
    }
};

export const searchDocumentRequest = (category, clubID) => {
    return {
        type: types.SEARCH_DOCUMENT_REQUEST,
        category,
        clubID,
    }
};

export const authChangeModalVisualize = (clubID, joinID, username) => {
    return {
        type: types.AUTH_CHANGE_MODAL_VISUALIZE,
        clubID,
        joinID,
        username
    }
};

export const changeAuthLevelRequest = (joinID, authLevel) => {
    return {
        type: types.CHANGE_AUTH_LEVEL_REQUEST,
        joinID,
        authLevel,
    }
};

export const removeModal = () => {
    return {
        type: types.REMOVE_MODAL
    }
};

export const updateAuthLevel = (authLevel) => {
    return {
        type: types.UPDATE_AUTH_LEVEL,
        authLevel,
    }
};

export const getDocTypeListRequest = (id) => {
    return {
        type : types.GET_DOC_TYPE_LIST_REQUEST,
        id,
    }
};

export const updateDocTypeList = (docTypeList) => {
    return {
        type: types.UPDATE_DOC_TYPE_LIST,
        docTypeList,
    }
};

export const finishPost = () => {
    return {
        type: types.FINISH_POST,
    }
};

export const startPost = () => {
    return {
        type: types.START_POST,
    }
}
