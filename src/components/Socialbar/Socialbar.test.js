import React from 'react';
import { shallow } from 'enzyme';
import Socialbar from './Socialbar';

it('renders without crashing', () => {
  shallow(<Socialbar />);
});