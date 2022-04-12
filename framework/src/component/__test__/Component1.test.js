import React from 'react';
import { shallow } from 'enzyme';

import Component1 from '../Component1.js';


/**
 * Shallow only render parent component and ignore all children components so it's fast
 */

describe('Component1', () => {
  const component1 = shallow(<Component1 />);
  it('containsMatchingElement', () => {
    expect(component1.containsMatchingElement(<div>My first class component.</div>)).toEqual(true);
  });
});
