import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { EventContext } from 'direflow-component';

import { Theme } from '../../common/types';
import { useHostElement } from '../../common/hooks';
import Styled from '../../common/Styled';

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
  {
    theme,
    label,
    labelPosition,
    error,
    checked: checkedProp,
    defaultChecked,
    indeterminate: indeterminateProp,
    children,
    ...props
  },
) => {
  const inputElRef = useRef<HTMLInputElement>(null);

  const [checked, setChecked] = useState<boolean>(!!(defaultChecked || checkedProp));
  const [indeterminate, setIndeterminate] = useState<boolean>(!!indeterminateProp);

  const dispatch = useContext(EventContext);

  const { hostHasAttribute } = useHostElement(inputElRef);

  const checkboxChangeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
    if (!hostHasAttribute('checked')) {
      setChecked(e.target.checked);

      setIndeterminate(false);
    }

    dispatch(new CustomEvent<HTMLInputElement>(e.type, { detail: e.target }));
  }, [hostHasAttribute, dispatch]);

  useEffect(() => {
    if (hostHasAttribute('checked')) {
      setChecked(!!checkedProp);
    }
  }, [hostHasAttribute, checkedProp]);

  useEffect(() => {
    setIndeterminate(!!indeterminateProp);
  }, [indeterminateProp]);

  useEffect(() => {
    if (inputElRef.current) {
      inputElRef.current.indeterminate = indeterminate;
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

          <slot>{label}</slot>
        </div>
      </label>
    </Styled>
  );
};

Checkbox.defaultProps = {
  theme: 'dark',
  label: '',
  labelPosition: 'right',
  error: false,
  checked: false,
  indeterminate: false,
  disabled: false,
  readOnly: false,
};

export default Checkbox
