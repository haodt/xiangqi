import React from 'react';
import { shallow } from 'enzyme';

import Board from './Board';

test('Board component', () => {
  expect(shallow(<Board />).contains(<svg />)).toBe(true);
});
