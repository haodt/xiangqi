import { withTests } from '@storybook/addon-jest';
import { storiesOf } from '@storybook/react';

/**
 * Config jest addon here to make storybook do hot reload when test changed
 */
import results from '../.jest/results.json';

export const makeStories = ({ name }) => {
  return storiesOf(name, module)
    .addDecorator(
      withTests({
        results,
        filesExt: '((\\.spec?)|(\\.test?))?(\\.jsx|\\.js)?$',
      }),
    )
    .addParameters({ jest: [name] });
};
