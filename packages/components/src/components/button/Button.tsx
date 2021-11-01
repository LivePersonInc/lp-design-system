import React, { useEffect, useRef } from 'react';

import { Theme } from '../../common/types';
import { useHostElement } from '../../common/hooks';
import Styled from '../../common/Styled';

import styles from './Button.scss';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'destructive' | 'inline'
export type ButtonSize = 'small' | 'medium' | 'large'

export type ButtonCustomProps = {
  theme?: Theme
  variant?: ButtonVariant
  size?: ButtonSize

  /**
   * Can be provided as a child element
   */
  label?: string
}

export type ButtonProps = JSX.IntrinsicElements['button'] & ButtonCustomProps

export type ButtonComponent = React.FC<ButtonProps>

const Button: ButtonComponent = ({ label }) => {
  const slotElRef = useRef<HTMLSlotElement>(null);

  const { getHostElement } = useHostElement(slotElRef);

  useEffect(() => {
    const hostEl = getHostElement();

    if (hostEl) {
      hostEl.tabIndex = 0;
    }
  }, [getHostElement]);

  return (
    <Styled styles={styles}>
      <slot name="icon-left" />

      <slot ref={slotElRef}>{label}</slot>

      <slot name="icon-right" />
    </Styled>
  );
};

Button.defaultProps = {
  theme: 'dark',
  variant: 'primary',
  size: 'medium',
  label: '',
};

export default Button
