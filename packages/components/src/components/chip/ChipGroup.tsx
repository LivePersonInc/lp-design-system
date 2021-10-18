import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';

import { getPropsByDefaultProps } from '../../common/helpers';
import { useHostElement } from '../../common/hooks';
import Styled from '../../common/Styled';

import Chip, { ChipProps } from './Chip';

import styles from './ChipGroup.scss';

export type ChipGroupCustomProps = {
  chips?: ChipProps[]
}

export type ChipGroupProps = JSX.IntrinsicElements['div'] & Omit<ChipProps, 'label'> & ChipGroupCustomProps

export type ChipGroupComponent = React.FC<ChipGroupProps>

const ChipGroup: ChipGroupComponent = ({ chips, ...props }) => {
  const slotElRef = useRef<HTMLSlotElement>(null);

  const { getHostElement } = useHostElement(slotElRef);

  useEffect(() => {
    setTimeout(() => {
      const chipProps = getPropsByDefaultProps(Chip.defaultProps, props);
      const chipPropsKeys = Object.keys(chipProps);

      getHostElement()?.querySelectorAll('lp-chip').forEach(chip => {
        chipPropsKeys.forEach(key => {
          chip.setAttribute(key, chipProps[key as keyof typeof Chip.defaultProps]);
        });
      });
    });
  }, [props, getHostElement]);

  return (
    <Styled styles={styles}>
      <slot ref={slotElRef}>
        {chips?.map((props, index) => (
          <lp-chip
            key={index}
            {...props}
            // @ts-ignore
            part={classNames('chip', { first: index === 0, last: index === chips?.length - 1 })}
          />
        ))}
      </slot>
    </Styled>
  );
};

ChipGroup.defaultProps = {
  ...Chip.defaultProps,
  chips: [],
};

export default ChipGroup
