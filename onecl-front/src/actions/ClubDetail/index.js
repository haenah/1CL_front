import * as types from './ActionTypes';

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

export const submitDocumentRequest = (title, content) => {
    return {
        type : types.SUBMIT_DOCUMENT_REQUEST,
        title,
        content
    }
};

export const getDocumentRequest = (clubID, docID) => ({
    type: types.GET_DOCUMENT_REQUEST,
    clubID,
    docID,
});

export const getDocument = (document) => ({
    type: types.GET_DOCUMENT,
    document,
});

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

export const searchDocumentRequest = (category) => {
    return {
        type: types.SEARCH_DOCUMENT_REQUEST,
        category
    }
};

export const authChangeModalVisualize = (clubID, memberID) => {
    return {
        type: types.AUTH_CHANGE_MODAL_VISUALIZE,
        clubID,
        memberID,
    }
};

export const changeAuthLevelRequest = (clubID, memberID, authLevel) => {
    return {
        type: types.CHANGE_AUTH_LEVEL_REQUEST,
        clubID,
        memberID,
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
