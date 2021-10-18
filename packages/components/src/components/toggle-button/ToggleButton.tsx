import React, { useEffect, useRef } from 'react';

import { Theme } from '../../common/types';
import { useHostElement } from '../../common/hooks';
import Styled from '../../common/Styled';

import styles from './ToggleButton.scss';

export type ToggleButtonSize = 'default' | 'small'

export type ToggleButtonCustomProps = {
  theme?: Theme
  size?: ToggleButtonSize

  /**
   * Can be provided as a child element
   */
  label?: string
  selected?: boolean
}

export type ToggleButtonProps = JSX.IntrinsicElements['button'] & ToggleButtonCustomProps

export type ToggleButtonComponent = React.FC<ToggleButtonProps>

const ToggleButton: ToggleButtonComponent = ({ label }) => {
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

ToggleButton.defaultProps = {
  theme: 'dark',
  size: 'default',
  label: '',
  selected: false,
};

export default ToggleButton
