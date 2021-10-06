import React, { useCallback, useContext, useEffect, useRef } from 'react';
import { EventContext } from 'direflow-component';

import { useHostElement } from 'lpds/common/hooks';

import Styled from 'lpds/common/Styled';

import { Theme } from 'lpds/styles/common';

import 'lpds/icons/close-small';

import styles from './Chip.scss';

export type ChipSize = 'default' | 'small'

export type ChipProps = JSX.IntrinsicElements['div'] & {
  theme?: Theme
  size?: ChipSize

  /**
   * Can be provided as a child
   */
  label?: string

  removable?: boolean
}

export type ChipComponent = React.FC<ChipProps>

const Chip: ChipComponent = ({ label, removable }) => {
  const slotElRef = useRef<HTMLSlotElement>(null);

  const dispatch = useContext(EventContext);

  const { getHostElement } = useHostElement(slotElRef);

  const buttonRemoveClickHandler = useCallback((): void => {
    dispatch(new CustomEvent('chip-remove', { detail: getHostElement(), composed: true }));
  }, [dispatch, getHostElement]);

  useEffect(() => {
    const hostElement = getHostElement();

    if (hostElement) {
      hostElement.tabIndex = 0;
    }
  }, [getHostElement]);

  return (
    <Styled styles={styles}>
      {removable && (
        <button type="button" onClick={buttonRemoveClickHandler}>
          <lp-close-small-icon />
        </button>
      )}

      <slot ref={slotElRef}>{label}</slot>
    </Styled>
  );
};

Chip.defaultProps = {
  theme: 'dark',
  size: 'default',
  label: '',
  removable: false,
};

export default Chip
