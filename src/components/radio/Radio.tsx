import React, { useCallback, useContext, useRef } from 'react';
import { EventContext, Styled } from 'direflow-component';

import { Theme } from 'lpds/styles/common';

import styles from './Radio.scss';

export type RadioSizes = 'default' | 'large'
export type RadioLabelPositions = 'left' | 'right'

export type RadioProps = Omit<JSX.IntrinsicElements['input'], 'size'> & {
  theme?: Theme
  size?: RadioSizes
  label?: string
  labelPosition?: RadioLabelPositions
  error?: boolean
}

export type RadioComponent = React.FC<RadioProps>

const Radio: RadioComponent = ({ theme, size, label, labelPosition, error, ...props }) => {
  const inputElRef = useRef<HTMLInputElement>(null);

  const dispatch = useContext(EventContext);

  const radioChangeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(new CustomEvent<HTMLInputElement>(e.type, { detail: e.target }));
  }, [dispatch]);

  return (
    <Styled styles={styles} scoped={false}>
      <label>
        <input
          {...props}
          ref={inputElRef}
          type="radio"
          onChange={radioChangeHandler}
        />

        <div className="label">
          <div className="check-box" />

          {label}
        </div>
      </label>
    </Styled>
  );
};

Radio.defaultProps = {
  theme: 'dark',
  size: 'default',
  name: '',
  label: '',
  labelPosition: 'left',
  error: false,
  defaultChecked: false,
  disabled: false,
  readOnly: false,
};

export default Radio
