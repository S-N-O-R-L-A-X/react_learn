import React from 'react';
import { shallow } from 'enzyme';
import Component3 from '../Component3.js';

describe('Component3', () => {
  const component3 = shallow(<Component3 />);
  it('style', () => {
    expect(component3.find({ className: 'box1' }).text()).toMatch(/盒子/);
  });
})
