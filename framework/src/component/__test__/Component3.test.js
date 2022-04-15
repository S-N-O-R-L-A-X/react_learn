import React, { Component } from 'react';
import { shallow } from 'enzyme';
import Component3 from '../Component3.js';

describe('Component3', () => {
  const component3 = shallow(<Component3 />);
  console.log(component3.props());
  console.log(component3.children().at(2).props().children);
  it('children', () => {
    expect(component3.children().length).toBe(3);
  })
  it('use className to find', () => {
    expect(component3.find({ className: 'box1' }).text()).toMatch(/盒子/);
  });

  it('use class selector',() => {
    expect(component3.find('.box1').text()).toMatch(/盒子/);
  });

  //this is a method to verify colors
  it('childAt&props',() => {
    expect(component3.childAt(0).props().style.backgroundColor).toBe("pink");
    expect(component3.childAt(0).props().style.backgroundColor).not.toBe("red");
  });

  it('prop', () => {
    expect(component3.childAt(0).prop('style').backgroundColor).toBe("pink");
  })

  it('prop', () => {
    expect(component3.childAt(1).prop('style').backgroundColor).not.toBe("Blue"); //capital-sensitive
  })

  it('at', () => {
    // expect(component3.children().at(2).props().text()).toBe('第三个盒子'); //not a function
    expect(component3.children().at(2).props().children).toBe('第三个盒子');
  })
})
