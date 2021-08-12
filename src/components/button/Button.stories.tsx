import React from 'react';

import { ButtonProps } from './Button';

export default {
  title: 'Button',
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#07092E' },
        { name: 'light', value: '#FFF' },
      ],
    },
  },
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
};

export const Button = (props: ButtonProps) => <lp-button {...props}></lp-button>;
Button.args = {
  theme: 'dark',
  variant: 'primary',
  size: 'medium',
  label: 'Button',
  disabled: false,
};
