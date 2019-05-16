import {take,put,call,fork} from 'redux-saga/effects';
import queryString from 'query-string';
import api from '../api'
import * as actions from '../actions/Clubsearch/index'
import * as types from '../actions/Clubsearch/ActionTypes'

const url_getCategory = 'http://127.0.0.1:8000/club/category/'; /* todo */
const url_getDepartment = 'http://127.0.0.1:8000/club/dept/'; /* todo */
const url_getClub = 'http://127.0.0.1:8000/'; /* todo */

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
        // console.log(department);
        const url = `http://127.0.0.1:8000/club/?department=${department.label}&category=${category.label}`;
        yield call(getClubList, url);
    }
}


export default function* ClubSearchSaga() {
    yield fork(watchGetCategoryListRequest);
    yield fork(watchGetDeptListRequest);
    yield fork(watchGetClubListRequest);
}
