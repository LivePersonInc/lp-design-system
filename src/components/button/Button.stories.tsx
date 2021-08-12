import React from 'react';
import { Meta, Story } from '@storybook/react';

import Button, { ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  argTypes: {
    theme: {
      options: ['dark', 'light'],
      control: { type: 'inline-radio' },
      defaultValue: 'dark',
    },
    variant: {
      options: [
        'primary',
        'secondary',
        'tertiary',
        'destructive',
        'ghost',
        'inline',
      ],
      control: { type: 'inline-radio' },
      defaultValue: 'primary',
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'inline-radio' },
      defaultValue: 'medium',
    },
  },
} as Meta<ButtonProps>;

export const Default: Story<ButtonProps> = ({ children, ...props }) => (
  <lp-button {...props}>{children}</lp-button>
);

Default.args = {
  theme: 'dark',
  variant: 'primary',
  size: 'medium',
  children: 'Button',
  disabled: false,
};
