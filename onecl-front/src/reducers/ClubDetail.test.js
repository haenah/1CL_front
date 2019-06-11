import React from 'react';
import ClubDetail from './ClubDetail';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as actions from '../actions/ClubDetail/index';

configure({
    adapter : new Adapter()
});

describe('reducer', () => {
    let state = ClubDetail(undefined, {});

    it('should return the initialState', () => {
        expect(state).toHaveProperty('documentList', []);
        expect(state).toHaveProperty('memberList', []);
        expect(state).toHaveProperty('infoPost', null);
        expect(state).toHaveProperty('componentStatus', 0);
        expect(state).toHaveProperty('authLevel', 0);
    });

    it('change status test', () => {
        state = ClubDetail(state, actions.changeStatus(3));
        expect(state).toHaveProperty('componentStatus', 3);
    });

    it('update doc list test', () => {
        const docList = [
            {
                id : 1,
                title : 'first post',
            },
            {
                id : 2,
                title : 'second post',
            },
            {
                id : 3,
                title : 'third post',
            },
        ];

        state = ClubDetail(state, actions.updateDocumentList(docList));
        expect(state).toHaveProperty('documentList', docList);
    });

    it('update member list test', () => {
        const docList = [
            {
                id : 1,
                title : 'first post',
            },
            {
                id : 2,
                title : 'second post',
            },
            {
                id : 3,
                title : 'third post',
            },
        ];

        state = ClubDetail(state, actions.updateMemberList(docList));
        expect(state).toHaveProperty('memberList', docList);
    });

    it('update info post test', () => {
        const infoPost = 'information post';

        state = ClubDetail(state, actions.updateInfoPost(infoPost));
        expect(state).toHaveProperty('infoPost', infoPost);
    });
});
