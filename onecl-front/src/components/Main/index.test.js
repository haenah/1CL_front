import React from 'react';
import Main from './Main';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter : new Adapter() });

describe('<Main />', () => {
  let component;

  it('rendering test', () => {
    component = shallow(
      <Main
        fetchClubs={jest.fn()}
      />);
  });

  it('input tag count', () => {
    expect(component.find('input').length).toEqual(1);
  });

  // it('input value change test', () => {
  //   component.find('.search').simulate('change', { target: { value: 'test' } });
  //   expect(component.state().search).toEqual('test');
  // });
});
