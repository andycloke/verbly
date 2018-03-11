import { configure } from '@storybook/react';

function loadStories() {
  require('../src/features/options/stories');
}

configure(loadStories, module);
