import React, { useCallback, useContext, useEffect, useRef } from 'react';
import { EventContext } from 'direflow-component';

import { useHostElement } from 'lpds/common/hooks';

import Styled from 'lpds/common/Styled';

import 'lpds/components/checkbox';
import 'lpds/components/toggle';

import styles from './SelectOption.scss';

export type SelectOptionProps = JSX.IntrinsicElements['option'] & {
  label?: string
}

export type SelectOptionComponent = React.FC<SelectOptionProps>

const SelectOption: SelectOptionComponent = ({ label }) => {
  const slotElRef = useRef<HTMLSlotElement>(null);

  const { getHostElement } = useHostElement(slotElRef);

  const dispatch = useContext(EventContext);

  const hostClickElement = useCallback((): void => {
    dispatch(new CustomEvent('select'));
  }, [dispatch]);

  useEffect(() => {
    const hostElement = getHostElement();

    if (hostElement) {
      hostElement.tabIndex = 0;
    }
  }, [getHostElement, hostClickElement]);

  useEffect(() => {
    getHostElement()?.addEventListener('click', hostClickElement);
  }, [getHostElement, hostClickElement]);

  return (
    <Styled styles={styles}>
      <slot ref={slotElRef}>{label}</slot>
    </Styled>
  );
};

SelectOption.defaultProps = {
  label: '',
};

export default SelectOption
