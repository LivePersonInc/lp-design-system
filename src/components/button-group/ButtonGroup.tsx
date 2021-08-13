import React, { useCallback, useEffect, useRef } from 'react';
import { Styled } from 'direflow-component';

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

  const wrapClickHandler = useCallback((e): void => {
    console.log(e);
  }, []);

  useEffect(() => {
    if (wrapEl.current) {
      const slotEl = wrapEl.current.querySelector('slot');

      const buttons = slotEl?.assignedElements();

      buttons?.forEach(button => {
        button.addEventListener('click', e => {
          buttons.find(({ classList }) => classList.contains('active'))?.classList.remove('active');

          (e.target as HTMLDivElement).classList.add('active');
        });
      });
    }
  }, []);

  return (
    <Styled styles={styles} scoped={false}>
      <div ref={wrapEl} className="wrap" onClick={wrapClickHandler}>
        {children}
      </div>
    </Styled>
  );
}

export default ButtonGroup;