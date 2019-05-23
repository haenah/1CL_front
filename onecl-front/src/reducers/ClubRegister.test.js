import React from 'react';
import ClubRegister from './ClubRegister';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as actions from '../actions/ClubRegister/index';

configure({ adapter : new Adapter() });

describe('reducer', () => {
    let state = ClubRegister(undefined, {});
    it('should return the initialState', () => {
        expect(state).toHaveProperty('registerSuccess', false);
    });

    it('should be true', () => {
        state = ClubRegister(state, actions.registerSuccess());
        expect(state).toHaveProperty('registerSuccess', true);
    });

})
