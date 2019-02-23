import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import centered from '@storybook/addon-centered/react';

addDecorator(withInfo);
addDecorator(centered);
addDecorator(withKnobs);

// automatically import all files ending in *.stories.js or jsx
const req = require.context('../src', true, /.stories.(js|jsx)$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
