import React, { useCallback, useContext } from 'react';
import { EventContext, Styled } from 'direflow-component';

import { Theme } from '../../common/types';

import styles from './Radio.scss';

export type RadioSizes = 'default' | 'large'
export type RadioLabelPositions = 'left' | 'right'

export type RadioCustomProps = {
  theme?: Theme
  size?: RadioSizes

  /**
   * Can be provided as a child element
   */
  label?: string

  labelPosition?: RadioLabelPositions
  error?: boolean
}

export type RadioProps = Omit<JSX.IntrinsicElements['input'], 'size'> & RadioCustomProps

export type RadioComponent = React.FC<RadioProps>

const Radio: RadioComponent = ({ theme, size, label, labelPosition, error, children, ...props }) => {
  const dispatch = useContext(EventContext);

  const radioChangeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(new CustomEvent<HTMLInputElement>(e.type, { detail: e.target }));
  }, [dispatch]);

  return (
    <Styled styles={styles} scoped={false}>
      <label>
        <input {...props} type="radio" onChange={radioChangeHandler} />

        <div className="label">
          <div className="check-box" />

          <slot>{label}</slot>
        </div>
      </label>
    </Styled>
  );
};

export const radioDefaultProps = {
  theme: 'dark',
  size: 'default',
  label: '',
  labelPosition: 'left',
  error: false,
  checked: false,
  disabled: false,
  readOnly: false,
};

Radio.defaultProps = radioDefaultProps as Partial<RadioProps>;

export default Radio
