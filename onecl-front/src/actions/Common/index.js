import * as types from "../Common/ActionTypes";

export const getClubListRequest = (department, category) => {
    return{
        type : types.GET_CLUB_LIST_REQUEST,
        department,
        category,
    }
};

export const getDeptListRequest = () => {
    return{
        type : types.GET_DEPT_LIST_REQUEST,
    }
};

export const getCategoryListRequest = () => {
    return{
        type : types.GET_CATEGORY_LIST_REQUEST,
    }
};

export const getClubList = (clubList) => {
    return{
        type : types.GET_CLUB_LIST,
        clubList,
    }
};

export const getDeptList = (deptList) => {
    return{
        type : types.GET_DEPT_LIST,
        deptList,
    }
};

export const getCategoryList = (categoryList) => {
    return{
        type : types.GET_CATEGORY_LIST,
        categoryList,
    }
};
