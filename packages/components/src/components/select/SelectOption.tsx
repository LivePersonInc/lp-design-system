import React, { useCallback, useContext, useEffect, useRef } from 'react';
import { EventContext } from 'direflow-component';

import { useHostElement } from '../../common/hooks';

import Styled from '../../common/Styled';

import '../checkbox';
import '../toggle';

import styles from './SelectOption.scss';

export type SelectOptionCustomProps = {
  /**
   * Can be provided as a child element
   */
  label?: string
}

export type SelectOptionProps = JSX.IntrinsicElements['option'] & SelectOptionCustomProps

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
