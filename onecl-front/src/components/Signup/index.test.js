import React from 'react';
import SignUp from './Signup';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from "react-test-renderer";
configure({ adapter : new Adapter() });

describe('<SignUp />', () => {
    let component = null;

    it('rendering test', () => {
        component = renderer.create(<SignUp/>);
    });

    it('each tag rendering test', () => {
        const wrapper = shallow(<SignUp/>);
        expect(wrapper.find('.heading-space').length).toEqual(1);
    });

    it('input tag count', () => {
        const wrapper = shallow(<SignUp/>);
        expect(wrapper.find('input').length).toEqual(6);
    });

    it('input value change test', () => {
        const e = {
            target : {
                name : 'name',
                value : 'input value',
            }
        };
        component.getInstance().handleChange(e);
        expect(component.getInstance().state.name).toBe('input value');
    });

    it('password validation test', () => {
        const e1 = {
            target : {
                name : 'pw',
                value : 'Test123$',
            }
        };

        const e2 = {
            target : {
                name : 'pw_again',
                value : 'Test123$',
            }
        };

        component.getInstance().handleChange(e1);
        component.getInstance().handleChange(e2);

        expect(component.getInstance().state.pwIsValid).toBe(true);
        expect(component.getInstance().state.pwCompare).toBe(true);
    })
});
