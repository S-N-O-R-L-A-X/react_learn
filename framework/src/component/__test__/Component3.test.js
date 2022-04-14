import React, { Component } from 'react';
import { shallow } from 'enzyme';
import Component3 from '../Component3.js';

describe('Component3', () => {
  const component3 = shallow(<Component3 />);
  it('use className to find', () => {
    expect(component3.find({ className: 'box1' }).text()).toMatch(/盒子/);
  });
  // it('at', ()=> {
  //   expect(component3.find({ className: 'box1' }).at(0)).toMatch(<div style={{ backgroundColor: "pink" }}>盒子</div>);
  // });
  it('use class selector',() => {
    expect(component3.find('.box1').text()).toMatch(/盒子/);
  });

  it('childAt&props',() => {
    console.log(component3.children());
    
    expect(component3.childAt(0).props().style.backgroundColor).toBe("pink");
    expect(component3.childAt(0).props().style.backgroundColor).not.toBe("red");
  });
})
