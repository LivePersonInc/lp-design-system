import React, { useMemo } from 'react';
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

const ButtonIcon: React.FC<{ name?: string }> = ({ name }) => {
  const Icon = useMemo<string>(() => (
    `lp-${name}-icon`
  ), [name]);

  if (!name) {
    return null;
  }

  // @ts-ignore
  return <Icon class="icon" />;
};

const Button: ButtonComponent = ({ icon, iconPlacement, children }) => (
  <>
    {iconPlacement === 'left' && <ButtonIcon name={icon} />}

    <Styled styles={styles} scoped={false}>
      {children}
    </Styled>

    {iconPlacement === 'right' && <ButtonIcon name={icon} />}
  </>
);

Button.defaultProps = {
  theme: 'dark',
  variant: 'primary',
  size: 'medium',
  icon: undefined,
  iconPlacement: 'left',
};

export default Button;