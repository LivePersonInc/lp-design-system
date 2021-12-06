import React, { useCallback, useContext, useRef } from 'react';
import { EventContext } from 'direflow-component';
import classNames from 'classnames';

import { Theme } from '../../common/types';
import Styled from '../../common/Styled';

import styles from './MultiselectChip.scss';

export type ChipSize = 'default' | 'small'

export type MultiselectChipCustomProps = {
  theme?: Theme
  size?: ChipSize
  chips?: { label: string, value: string | number }[]
}

export type MultiselectChipProps = JSX.IntrinsicElements['div'] & MultiselectChipCustomProps

export type MultiselectChipComponent = React.FC<MultiselectChipProps>

const MultiselectChip: MultiselectChipComponent = ({ chips }) => {
  const slotElRef = useRef<HTMLSlotElement>(null);

  const dispatch = useContext(EventContext);

  const buttonRemoveClickHandler = useCallback((value: string | number) => (): void => {
    dispatch(new CustomEvent('chip-remove', {
      detail: chips?.find(chip => chip.value === value),
      composed: true,
    }));
  }, []);

  return (
    <Styled styles={styles}>
      <slot ref={slotElRef}>
        {chips?.map(({ label, value }, index) => (
          <span
            key={index}
            // @ts-ignore
            part={classNames('chip', { first: index === 0, last: index === chips.length - 1 })}
          >
            <button type="button" onClick={buttonRemoveClickHandler(value)}>
              <lp-close-small-icon />
            </button>

            {label}
          </span>
        ))}
      </slot>
    </Styled>
  );
};

MultiselectChip.defaultProps = {
  theme: 'dark',
  size: 'default',
  chips: [],
};

export default MultiselectChip
