import * as types from '../actions/Clubsearch/ActionTypes'

const initialState = {
    categoryList : null,
    deptList : null,
    clubList : null,
};

const ClubSearch = (state=initialState, action) => {
    switch (action.type) {
        case types.GET_DEPT_LIST:
            return {
                ...state,
                deptList: action.deptList
            };
        case types.GET_CATEGORY_LIST:
            return {
                ...state,
                categoryList: action.categoryList
            };
        case types.GET_CLUB_LIST:
            return {
                ...state,
                clubList: action.clubList
            };
        default:
            return state;
    }
}

export default ClubSearch;
