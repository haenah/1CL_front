import * as types from './ActionTypes';

export const fetchClubList = (data) => {
  return {
    type: types.FETCH_CLUB_LIST,
    clubList: data,
  }
};

export const fetchClubListRequest = () => {
  return {
    type: types.FETCH_CLUB_LIST_REQUEST,
  }
};
