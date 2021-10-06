import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { EventContext, Styled } from 'direflow-component';

import { Theme } from 'lpds/styles/common';

import styles from './Toggle.scss';

export type ToggleLabelPositions = 'left' | 'right'

export type ToggleCustomProps = {
  theme?: Theme

  /**
   * Can be provided as a child element
   */
  label?: string

  labelPosition?: ToggleLabelPositions
  a11y?: boolean
}

export type ToggleProps = JSX.IntrinsicElements['input'] & ToggleCustomProps

export type ToggleComponent = React.FC<ToggleProps>

const Toggle: ToggleComponent = (
  { theme, label, labelPosition, a11y, checked: checkedProp, defaultChecked, children, ...props },
) => {
  const inputElRef = useRef<HTMLInputElement>(null);

  const [checked, setChecked] = useState<boolean>(!!(defaultChecked || checkedProp));

  const dispatch = useContext(EventContext);

  const isCheckedSet = useCallback((): boolean => (
    (inputElRef.current?.getRootNode() as ShadowRoot)?.host.hasAttribute('checked')
  ), []);

  const toggleChangeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
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

  return (
    <Styled styles={styles} scoped={false}>
      <label>
        <input
          {...props}
          ref={inputElRef}
          type="checkbox"
          checked={checked}
          onChange={toggleChangeHandler}
        />

        <div className="label">
          <div className="slider">
            {a11y && (
              <>
                <span />
                <span />
              </>
            )}
          </div>

          <slot>{label}</slot>
        </div>
      </label>
    </Styled>
  );
};

Toggle.defaultProps = {
  theme: 'dark',
  label: '',
  labelPosition: 'right',
  a11y: false,
  checked: false,
  disabled: false,
  readOnly: false,
};

export default Toggle
