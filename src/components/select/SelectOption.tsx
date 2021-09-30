import React, { useCallback, useContext, useEffect, useRef } from 'react';
import { EventContext } from 'direflow-component';

import { useHostElement } from 'lpds/common/hooks';

import Styled from 'lpds/common/Styled';

import 'lpds/components/checkbox';
import 'lpds/components/toggle';

import styles from './SelectOption.scss';

export type SelectOptionTypes = 'default' | 'checkbox' | 'toggle'

export type SelectOptionProps = JSX.IntrinsicElements['option'] & {
  type?: SelectOptionTypes
  label?: string
}

export type SelectOptionComponent = React.FC<SelectOptionProps>

const SelectOption: SelectOptionComponent = ({ type, label }) => {
  const slotElRef = useRef<HTMLSlotElement>(null);

  const { getHostElement } = useHostElement();

  const dispatch = useContext(EventContext);

  const hostClickElement = useCallback((): void => {
    dispatch(new CustomEvent('select'));
  }, [dispatch]);

  useEffect(() => {
    getHostElement(slotElRef).tabIndex = 0;
  }, [getHostElement, hostClickElement]);

  useEffect(() => {
    getHostElement(slotElRef).addEventListener('click', hostClickElement);
  }, [getHostElement, hostClickElement]);

  return (
    <Styled styles={styles}>
      {type === 'default' && <slot ref={slotElRef}>{label}</slot>}
      {type === 'checkbox' && (
        <lp-checkbox>
          <slot ref={slotElRef}>{label}</slot>
        </lp-checkbox>
      )}
      {type === 'toggle' && (
        <lp-toggle>
          <slot ref={slotElRef}>{label}</slot>
        </lp-toggle>
      )}
    </Styled>
  );
};

SelectOption.defaultProps = {
  type: 'default',
};

export default SelectOption
