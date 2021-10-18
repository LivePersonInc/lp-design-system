import React from 'react';

import { Theme } from '../../common/types';
import Styled from '../../common/Styled';

import styles from './InputHelper.scss';

export type InputHelperCustomProps = {
  theme?: Theme

  /**
   * Can be provided as a child element
   */
  text?: string

  error?: boolean
  disabled?: boolean
}

export type InputHelperProps = JSX.IntrinsicElements['div'] & InputHelperCustomProps

export type InputHelperComponent = React.FC<InputHelperProps>

const InputHelper: InputHelperComponent = ({ text }) => (
  <Styled styles={styles}>
    <slot>{text}</slot>
  </Styled>
);

InputHelper.defaultProps = {
  theme: 'dark',
  text: '',
  error: false,
  disabled: false,
};

export default InputHelper
