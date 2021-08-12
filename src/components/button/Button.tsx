import React from 'react';
import { Styled } from 'direflow-component';

import { Theme } from 'lpds/styles/common';

import styles from './Button.scss';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'destructive' | 'ghost' | 'inline'
export type ButtonSize = 'small' | 'medium' | 'large'
export type ButtonIconPlacement = 'left' | 'right'

export type ButtonProps = JSX.IntrinsicElements['button'] & {
  theme?: Theme
  variant?: ButtonVariant
  size?: ButtonSize
  icon?: string
  iconPlacement?: ButtonIconPlacement
}

export type ButtonComponent = React.FC<ButtonProps>

const Button: ButtonComponent = ({ children }) => {
  return (
    <Styled styles={styles} scoped={false}>
      {children}
    </Styled>
  )
};

Button.defaultProps = {
  theme: 'dark',
  variant: 'primary',
  size: 'medium',
  iconPlacement: 'left',
};

export default Button;