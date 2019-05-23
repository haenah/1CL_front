import React from 'react';
import ClubRegister from './ClubRegister';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter : new Adapter() });

describe('<ClubRegister />', () => {
    let component;

    it('rendering test', () => {
        component = shallow(
            <ClubRegister
                onGetCategory={jest.fn()}
                onGetDepartment={jest.fn()}
            />);
    });

    it('each tag rendering test', () => {
        expect(component.find('div').length).toEqual(4);
        expect(component.find('p').length).toEqual(3);
        expect(component.find('button').length).toEqual(1);
    });

    it('input tag count', () => {
        expect(component.find('input').length).toEqual(1);
    });

    it('input value change test', () => {
        component.find('.clubNameInput').simulate('change', { target: { value: 'input value' } });
        expect(component.state().clubName).toBe('input value');
    });
});
