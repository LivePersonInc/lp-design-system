import React from 'react';

import theme from './theme';

export const parameters = {
  layout: 'centered',
  options: {
    storySort: {
      order: [
        'Docs',
        'Tokens',
        'Components',
      ],
    },
  },
  docs: {
    theme,
  },
};

export const decorators = [
  (Story, { args }) => (
    <div className="story-decorator" style={{ backgroundColor: (args.theme === 'dark' ? '#07092E' : '#FFF') }}>
      <Story />
    </div>
  ),
];
