import React from 'react';

export const decorators = [
  (Story, { args }) => (
    <div className="story-decorator" style={{ backgroundColor: (args.theme === 'dark' ? '#07092E' : '#FFF') }}>
      <Story />
    </div>
  ),
];
