import * as types from './ActionTypes';

export const fetchJoin = (joinList) => (
  {
    type: types.FETCH_JOIN,
    joinList,
  }
);

export const fetchJoinRequest = () => ({
  type: types.FETCH_JOIN_REQUEST,
});
