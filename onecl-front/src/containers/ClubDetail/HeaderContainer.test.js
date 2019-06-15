import React from 'react';
import { mount } from 'enzyme';
import HeaderContainer from './HeaderContainer';
import configureMockStore from 'redux-mock-store';
import * as actions from '../../actions/ClubDetail/index';
import Adapter from "enzyme-adapter-react-16/build/index";
import {configure} from "enzyme/build/index";

configure({ adapter : new Adapter() });

describe('HeaderContainer', () => {
    let component = null;
    const mockStore = configureMockStore();

    let store = mockStore({
        ClubDetail : {
            documentList : [],
            memberList : [],
            infoPost : null,
            componentStatus : 0,
            authLevel: 0,
        }
    });

    it('renders properly', () => {
        component = mount(<HeaderContainer store={store} />);
    });

    it('dispatches infopost action', () => {
        component.find('button').at(0).simulate('click');
        expect(store.getActions()[0]).toEqual(actions.changeStatus(0));
    });

    it('dispatches docList action', () => {
        component.find('button').at(1).simulate('click');
        expect(store.getActions()[1]).toEqual(actions.changeStatus(1));
    });

    it('dispatches memList action', () => {
        component.find('button').at(2).simulate('click');
        expect(store.getActions()[2]).toEqual(actions.changeStatus(2));
    });
});
