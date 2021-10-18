import React from 'react';

import { Theme } from '../../common/types';
import Styled from '../../common/Styled';

import '@liveperson-design-system/icons/info-circle';

import styles from './InputLabel.scss';

export type InputLabelCustomProps = {
  theme?: Theme
  info?: string // TODO: Finish this functionality after Tooltip component will be finish

  /**
   * Can be provided as a child element
   */
  label?: string
}

export type InputLabelProps = JSX.IntrinsicElements['label'] & InputLabelCustomProps

export type InputLabelComponent = React.FC<InputLabelProps>

const InputLabel: InputLabelComponent = ({ theme, info, label, children, ...props }) => (
  <Styled styles={styles}>
    <label {...props}>{label || children}</label>

    {!!info && <lp-info-circle-icon class="additional-info-icon" type="outline" />}
  </Styled>
);

InputLabel.defaultProps = {
  theme: 'dark',
  info: '',
  label: '',
};

export default InputLabel
