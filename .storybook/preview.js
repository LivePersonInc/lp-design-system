import React from 'react';

import theme from './theme';

export const parameters = {
  layout: 'centered',
  options: {
    storySort: {
      order: [
        'Docs',
        [
          'Intro',
          'Quick Start',
          'Developing',
          'Have questions?',
        ],
        'Tokens',
        'Icons',
        [
          'Overview',
          'All Icons',
        ],
        'Components',
      ],
    },
  },
  docs: {
    theme,
  },
};
