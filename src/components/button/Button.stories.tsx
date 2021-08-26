import React from 'react';
import { Meta, Story } from '@storybook/react';

import IconStory from 'lpds/components/icons/Icon.stories';

import Button, { ButtonProps } from './Button';

import './';

const iconArgType = IconStory.argTypes?.icon;

iconArgType?.options.unshift('none');

export default {
  title: 'Components/Button',
  argTypes: {
    theme: {
      options: ['dark', 'light'],
      control: { type: 'inline-radio' },
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
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'inline-radio' },
    },
    icon: iconArgType,
    iconPlacement: {
      options: ['left', 'right'],
      control: { type: 'inline-radio' },
    },
  },
} as Meta<ButtonProps>;

export const Default: Story<ButtonProps> = ({ icon, children, ...props }) => {
  icon = (icon === 'none' ? undefined : icon);

  return (
    <lp-button key={`${icon}-${children}`} icon={icon} {...props}>
      <span>{children}</span>
    </lp-button>
  );
};

Default.args = {
  theme: 'dark',
  variant: 'primary',
  size: 'medium',
  icon: 'none',
  iconPlacement: 'left',
  children: 'Button',
  disabled: false,
};
