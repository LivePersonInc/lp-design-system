import React from 'react';
import { Styled } from 'direflow-component';

import { Theme } from '../../common/types';

import styles from './ToggleButton.scss';

export type ToggleButtonSize = 'small' | 'medium'

export type ToggleButtonProps = JSX.IntrinsicElements['button'] & {
  theme?: Theme
  selected?: boolean
  size?: ToggleButtonSize
  label?: string
}

export type ToggleButtonComponent = React.FC<ToggleButtonProps>

const ToggleButton: ToggleButtonComponent = ({ label }) => (
  <>
    <slot name="icon-left" />

    <Styled styles={styles} scoped={false}>
      <slot name="label">{label}</slot>
    </Styled>

    <slot name="icon-right" />
  </>
);

ToggleButton.defaultProps = {
  theme: 'dark',
  selected: false,
  size: 'medium',
  label: '',
};

export default ToggleButton
