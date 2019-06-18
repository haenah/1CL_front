import {take,put,call,fork} from 'redux-saga/effects';
import queryString from 'query-string';
import api from '../api'
import * as actions from '../actions/Common/index'
import * as types from '../actions/Common/ActionTypes'
import {REQUEST_URL} from "../Constants/Constants";

const url_getCategory = `${REQUEST_URL}/club/category/`; /* todo */
const url_getDepartment = `${REQUEST_URL}/club/dept/`; /* todo */

function* getCategoryList(){
    const data = yield call(api.get, url_getCategory);
    yield put(actions.getCategoryList(data));
}

function* watchGetCategoryListRequest(){
    while(true){
        yield take(types.GET_CATEGORY_LIST_REQUEST);
        yield call(getCategoryList)
    }
}

function* getDeptList(){
    const data = yield call(api.get, url_getDepartment);
    yield put(actions.getDeptList(data));
}

function* watchGetDeptListRequest(){
    while(true){
        yield take(types.GET_DEPT_LIST_REQUEST);
        yield call(getDeptList);
    }
}

function* getClubList(url){
    const data = yield call(api.get, url);
    yield put(actions.getClubList(data));
}

function* watchGetClubListRequest(){
    while(true){
        const{ department, category } = yield take(types.GET_CLUB_LIST_REQUEST);
        const url = `${REQUEST_URL}/club/?department=${department}&category=${category}&limit=100`;
        yield call(getClubList, url);
    }
}


export default function* ClubSearchSaga() {
    yield fork(watchGetCategoryListRequest);
    yield fork(watchGetDeptListRequest);
    yield fork(watchGetClubListRequest);
}
