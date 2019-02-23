import React from 'react';

import { makeStories } from '../../.storybook/make';

import Board from './Board';

makeStories({ name: 'Board' }).add('default', () => <Board />);
