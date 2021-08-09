import React from 'react';
import { Styled } from 'direflow-component';
import classNames from 'classnames';

import { Theme } from 'lpds/styles/common';

import styles from './Button.scss';

export type ButtonProps = JSX.IntrinsicElements['button'] & {
  theme?: Theme
  variant?: 'primary' | 'secondary' | 'tertiary' | 'destructive' | 'ghost' | 'inline'
  size?: 'small' | 'medium' | 'large'
  icon?: string
  iconPlacement?: 'left' | 'right'
  label?: React.ReactNode
}

export type ButtonComponent = React.FC<ButtonProps>

const Button: ButtonComponent = (
  {
    className,
    theme,
    variant,
    size,
    icon,
    iconPlacement,
    label,
    ...props
  }
) => {
  return (
    <Styled styles={styles}>
      <button className={classNames('lp-button', theme, variant, size, className)} {...props}>
        {label}
      </button>
    </Styled>
  )
};

Button.defaultProps = {
  theme: 'light',
  variant: 'primary',
  size: 'medium',
  label: 'Button',
  iconPlacement: 'left',
};

export default Button;