import React from 'react';
import { Styled } from 'direflow-component';

import { Theme } from 'lpds/styles/common';

import styles from './Button.scss';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'destructive' | 'ghost' | 'inline'
export type ButtonSize = 'small' | 'medium' | 'large'

export type ButtonProps = JSX.IntrinsicElements['button'] & {
  theme?: Theme
  variant?: ButtonVariant
  size?: ButtonSize
  label?: string
}

export type ButtonComponent = React.FC<ButtonProps>

const Button: ButtonComponent = ({ label }) => (
  <>
    <slot name="icon-left" />

    <Styled styles={styles} scoped={false}>
      <slot name="label">{label}</slot>
    </Styled>

    <slot name="icon-right" />
  </>
);

Button.defaultProps = {
  theme: 'dark',
  variant: 'primary',
  size: 'medium',
  label: '',
};

export default Button
