import React from 'react';

import LPDSTheme from './LPDSTheme';

export const parameters = {
  docs: {
    theme: LPDSTheme,
  },
};

export const decorators = [
  (Story, { args }) => (
    <div className="story-decorator" style={{ backgroundColor: (args.theme === 'dark' ? '#07092E' : '#FFF') }}>
      <Story />
    </div>
  ),
];
