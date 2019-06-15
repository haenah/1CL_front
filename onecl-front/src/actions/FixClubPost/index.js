import * as types from './ActionTypes';

export const putIntroRequest = (id, content) => {
    return {
        type : types.PUT_INTRO_REQUEST,
        id,
        content,
    }
};
