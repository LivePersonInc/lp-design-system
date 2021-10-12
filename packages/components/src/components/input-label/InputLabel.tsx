import React from 'react';
import { Styled } from 'direflow-component';

import { Theme } from '../../common/types';

import '@liveperson-design-system/icons/info-circle';

import styles from './InputLabel.scss';

export type InputLabelProps = JSX.IntrinsicElements['label'] & {
  theme?: Theme
  info?: string // TODO: Finish this functionality after Tooltip component will be finish
  label?: string
}

export type InputLabelComponent = React.FC<InputLabelProps>

const InputLabel: InputLabelComponent = ({ theme, info, label, children, ...props }) => (
  <>
    <Styled styles={styles} scoped={false}>
      <label {...props}>{label || children}</label>
    </Styled>

    {!!info && <lp-info-circle-icon class="additional-info-icon" type="outline" />}
  </>
);

InputLabel.defaultProps = {
  theme: 'dark',
  info: '',
  label: '',
};

export default InputLabel
