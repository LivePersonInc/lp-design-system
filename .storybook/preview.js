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
        [
          'Colors',
          'Typography',
          'Shadow',
          'Animation',
        ],
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
  design: { disable: true },
};

export const decorators = [
  (Story, { args }) => (
    <div className="story-decorator" style={{ backgroundColor: (args.theme === 'dark' ? '#07092E' : '#FFF') }}>
      <Story />
    </div>
  ),
];
