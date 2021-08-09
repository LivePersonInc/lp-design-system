import React from 'react';

import { ButtonProps } from './Button';

export default {
  title: 'Button',
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#FFF' },
        { name: 'dark', value: '#07092E' },
      ],
    },
  },
  argTypes: {
    theme: {
      options: ['light', 'dark'],
      control: { type: 'inline-radio' },
      defaultValue: 'light',
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
};

export const Button = (props: ButtonProps) => <lp-button {...props}></lp-button>;
Button.args = {
  theme: 'light',
  variant: 'primary',
  size: 'medium',
  label: 'Button',
  disabled: false,
};
