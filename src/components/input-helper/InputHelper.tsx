import React from 'react';
import { Styled } from 'direflow-component';

import { Theme } from 'lpds/styles/common';

import styles from './InputHelper.scss';

export type InputHelperProps = JSX.IntrinsicElements['div'] & {
  theme?: Theme
  text?: string
  error?: boolean
  disabled?: boolean
}

export type InputHelperComponent = React.FC<InputHelperProps>

const InputHelper: InputHelperComponent = ({ text, children }) => (
  <Styled styles={styles} scoped={false}>
    <slot>{text || children}</slot>
  </Styled>
);

InputHelper.defaultProps = {
  theme: 'dark',
  text: '',
  error: false,
  disabled: false,
};

export default InputHelper
