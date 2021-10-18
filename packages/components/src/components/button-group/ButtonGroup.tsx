import React, { useCallback, useContext, useEffect, useRef } from 'react';
import { EventContext } from 'direflow-component';

import { Theme } from '../../common/types';

import Styled from '../../common/Styled';

import styles from './ButtonGroup.scss';

export type ButtonGroupSize = 'default' | 'small'

export type ButtonGroupCustomProps = {
  theme?: Theme
  size?: ButtonGroupSize
}

export type ButtonGroupProps = JSX.IntrinsicElements['div'] & ButtonGroupCustomProps

export type ButtonGroupComponent = React.FC<ButtonGroupProps>

const ButtonGroup: ButtonGroupComponent = () => {
  const slotElRef = useRef<HTMLSlotElement>(null);

  const dispatch = useContext(EventContext);

  const buttonClickHandler = useCallback((e): void => {
    dispatch(new CustomEvent('button-click', e));
  }, [dispatch]);

  useEffect(() => {
    const buttons = slotElRef.current?.assignedElements();

    buttons?.forEach(button => {
      button.addEventListener('click', (e): void => {
        buttons.find(({ classList }) => classList.contains('selected'))?.classList.remove('selected');

        (e.target as HTMLButtonElement).classList.add('selected');

        buttonClickHandler(e);
      });
    });
  }, [buttonClickHandler]);

  return (
    <Styled styles={styles}>
      <slot ref={slotElRef} />
    </Styled>
  );
};

ButtonGroup.defaultProps = {
  theme: 'dark',
  size: 'default',
};

export default ButtonGroup
