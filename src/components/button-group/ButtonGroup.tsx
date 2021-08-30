import React, { useCallback, useContext, useEffect, useRef } from 'react';
import { EventContext, Styled } from 'direflow-component';

import { Theme } from 'lpds/styles/common';

import styles from './ButtonGroup.scss';

export type ButtonGroupSize = 'default' | 'small'

export type ButtonGroupCustomProps = {
  theme?: Theme
  size?: ButtonGroupSize
}

export type ButtonGroupProps = JSX.IntrinsicElements['div'] & ButtonGroupCustomProps

export type ButtonGroupComponent = React.FC<ButtonGroupProps>

const ButtonGroup: ButtonGroupComponent = ({ children }) => {
  const wrapEl = useRef<HTMLDivElement>(null);

  const dispatch = useContext(EventContext);

  const buttonClickHandler = useCallback((e): void => {
    dispatch(new CustomEvent('button-click', e));
  }, [dispatch]);

  useEffect(() => {
    if (wrapEl.current) {
      const slotEl = wrapEl.current.querySelector('slot');

      const buttons = slotEl?.assignedElements();

      buttons?.forEach(button => {
        button.addEventListener('click', (e): void => {
          buttons.find(({ classList }) => classList.contains('active'))?.classList.remove('active');

          (e.target as HTMLButtonElement).classList.add('active');

          buttonClickHandler(e);
        });
      });
    }
  }, []);

  return (
    <Styled styles={styles} scoped={false}>
      <div ref={wrapEl} className="wrap">
        {children}
      </div>
    </Styled>
  );
};

ButtonGroup.defaultProps = {
  theme: 'dark',
  size: 'default',
};

export default ButtonGroup
