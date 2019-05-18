import React from 'react';
import { mount } from 'enzyme';
import ClubRegisterContainer from './ClubRegisterContainer';
import configureMockStore from 'redux-mock-store';
import * as actions from '../../actions/Common/index';
import Adapter from "enzyme-adapter-react-16/build/index";
import {configure} from "enzyme/build/index";

configure({ adapter : new Adapter() });

describe('ClubRegisterContainer', () => {
    let component = null;
    const mockStore = configureMockStore();

    let store = mockStore({
        ClubSearch: {
            categoryList : null,
            deptList : null,
            clubList : null,
        },
        ClubRegister: {
            registerSuccess : false,
        },
    });

    it('renders properly', () => {
        // const context = { store };
        component = mount(<ClubRegisterContainer store={store} />);
    });

    it('dispatches GET_CATEGORY_LIST action', () => {
        expect(store.getActions()[0]).toEqual(actions.getCategoryListRequest());
    });

    it('dispatches GET_DEPT_LIST action', () => {
        expect(store.getActions()[1]).toEqual(actions.getDeptListRequest());
    });
});
