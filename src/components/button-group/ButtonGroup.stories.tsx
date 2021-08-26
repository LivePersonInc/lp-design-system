import React from 'react';
import { Meta, Story } from '@storybook/react';

import { ButtonGroupCustomProps } from './ButtonGroup';

import './';

export default {
  title: 'Components/ButtonGroup',
  argTypes: {
    theme: {
      options: ['dark', 'light'],
      control: { type: 'inline-radio' },
      defaultValue: 'dark',
    },
    size: {
      options: ['default', 'small'],
      control: { type: 'inline-radio' },
      defaultValue: 'default',
    },
  },
  parameters: {
    actions: {
      handles: ['button-click'],
    },
  },
} as Meta<ButtonGroupCustomProps>;

export const Default: Story<ButtonGroupCustomProps & { buttons: string }> = ({ buttons: buttonsProp, ...props }) => {
  const buttons = buttonsProp.split(',');

  return (
    <lp-button-group key={buttonsProp} {...props}>
      {buttons.map((button, index) => <button key={index}>{button}</button>)}
    </lp-button-group>
  );
}

Default.args = {
  theme: 'dark',
  size: 'default',
  buttons: 'Button1,Button2,Button3',
};
