import React from 'react';
import { shallow } from 'enzyme'
import Component2  from '../Component2.js'

describe('Component2', () => {
  const component2 = shallow(<Component2 />);
  it('text', () => {
    expect(component2.find('div').text()).toEqual("Use js in HTML");
  });
  it('text', () => {
    expect(component2.find('div').text()).toMatch(/js/);
  });
})