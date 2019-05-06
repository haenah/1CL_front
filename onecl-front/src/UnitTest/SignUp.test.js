import React from 'react';
import SignUp from '../components/Signup';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter : new Adapter() });

describe('<SignUp />', () => {
    it('rendering test', () => {
        const wrapper = shallow(<SignUp/>);
        expect(wrapper.length).toBe(1);
    });

    it('each tag rendering test', () => {
        const wrapper = shallow(<SignUp/>);
        expect(wrapper.find('#NameInput').length).toEqual(1);
        expect(wrapper.find('#IdInput').length).toEqual(1);
        expect(wrapper.find('#DuplicateIdTest').length).toEqual(1);
        expect(wrapper.find('#pw').length).toEqual(1);
        expect(wrapper.find('#pw_again').length).toEqual(1);
        expect(wrapper.find('#EmailInput').length).toEqual(1);
        expect(wrapper.find('#SendAuthCode').length).toEqual(1);
        expect(wrapper.find('#register').length).toEqual(1);
    });

    it('input value change test', () => {
        const wrapper = shallow(<SignUp/>);
        wrapper.find('#NameInput').simulate('change', { target: { value: 'input value' } });
        expect(wrapper.state().name).toBe('input value');
        wrapper.find('#IdInput').simulate('change', { target: { value: 'input value' } });
        expect(wrapper.state().id).toBe('input value');
        });

    it('password validation test', () => {
        const wrapper = shallow(<SignUp/>);
        wrapper.find('#pw').simulate('change', { target: { value: 'Test123$' }});
        wrapper.find('#pw_again').simulate('change', { target: { value: 'Test123$' }});
        expect(wrapper.state().pwCompare).toBe(true);
    })

});
