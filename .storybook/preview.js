import React from 'react';

import theme from './theme';

const storyOrder = [
  'docs-',
  'docs-intro',
  'docs-quick-start',
  'docs-developing',
  'docs-have-questions',
  'tokens',
  'components',
];

export const parameters = {
  layout: 'centered',
  options: {
    storySort: {
      order: [
        'Docs',
        ['Intro', 'Quick Start', 'Developing', 'Have questions?'],
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
