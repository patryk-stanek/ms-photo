import React from 'react';
import { shallow } from 'enzyme';
import Gallery from './Gallery';

it('renders without crashing', () => {
  shallow(<Gallery />);
});