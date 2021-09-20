import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { EventContext, Styled } from 'direflow-component';

import { Theme } from 'lpds/styles/common';

import styles from './Checkbox.scss';

export type CheckboxLabelPositions = 'left' | 'right'

export type CheckboxCustomProps = {
  theme?: Theme

  /**
   * Can be provided as a child element
   */
  label?: string

  labelPosition?: CheckboxLabelPositions
  error?: boolean
  indeterminate?: boolean
}

export type CheckboxProps = JSX.IntrinsicElements['input'] & CheckboxCustomProps

export type CheckboxComponent = React.FC<CheckboxProps>

const Checkbox: CheckboxComponent = (
  { theme, label, labelPosition, error, checked: checkedProp, defaultChecked, indeterminate, ...props },
) => {
  const inputElRef = useRef<HTMLInputElement>(null);

  const [checked, setChecked] = useState<boolean>(!!(defaultChecked || checkedProp));

  const dispatch = useContext(EventContext);

  const isCheckedSet = useCallback((): boolean => (
    (inputElRef.current?.getRootNode() as ShadowRoot)?.host.hasAttribute('checked')
  ), []);

  const checkboxChangeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
    if (!isCheckedSet()) {
      setChecked(e.target.checked);
    }

    dispatch(new CustomEvent<HTMLInputElement>(e.type, { detail: e.target }));
  }, [isCheckedSet, dispatch]);

  useEffect(() => {
    if (isCheckedSet()) {
      setChecked(!!checkedProp);
    }
  }, [isCheckedSet, checkedProp]);

  useEffect(() => {
    if (inputElRef.current) {
      inputElRef.current.indeterminate = !!indeterminate;
    }
  }, [indeterminate]);

  return (
    <Styled styles={styles} scoped={false}>
      <label>
        <input
          {...props}
          ref={inputElRef}
          type="checkbox"
          checked={checked}
          onChange={checkboxChangeHandler}
        />

        <div className="label">
          <svg className="check-box">
            {checked && <path d={indeterminate ? 'M5 8H11' : 'M5 8.15805L7.28781 10.3821L11 6'} />}
          </svg>

          {label}
        </div>
      </label>
    </Styled>
  );
};

Checkbox.defaultProps = {
  theme: 'dark',
  label: '',
  labelPosition: 'left',
  error: false,
  checked: false,
  indeterminate: false,
  disabled: false,
  readOnly: false,
};

export default Checkbox
