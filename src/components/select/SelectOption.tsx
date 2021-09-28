import React, { useCallback, useContext, useEffect, useRef } from 'react';
import { EventContext, Styled } from 'direflow-component';

import 'lpds/components/checkbox';
import 'lpds/components/toggle';

import styles from './SelectOption.scss';
import { useHostElement } from 'lpds/common/hooks';

export type SelectOptionTypes = 'default' | 'checkbox' | 'toggle'

export type SelectOptionProps = JSX.IntrinsicElements['option'] & {
  type?: SelectOptionTypes
}

export type SelectOptionComponent = React.FC<SelectOptionProps>

const SelectOption: SelectOptionComponent = ({ type }) => {
  const styledInnerElRef = useRef<HTMLDivElement>(null);

  const { getHostElement } = useHostElement();

  const dispatch = useContext(EventContext);

  const hostClickElement = useCallback((): void => {
    dispatch(new CustomEvent('select'));
  }, [dispatch]);

  useEffect(() => {
    getHostElement(styledInnerElRef).setAttribute('tabindex', '0');
  }, [getHostElement, hostClickElement]);

  useEffect(() => {
    getHostElement(styledInnerElRef).addEventListener('click', hostClickElement);
  }, [getHostElement, hostClickElement]);

  return (
    <>
      <Styled styles={styles} scoped={false}>
        <div ref={styledInnerElRef} />
      </Styled>

      {type === 'default' && <slot />}
      {type === 'checkbox' && (
        <lp-checkbox>
          <slot />
        </lp-checkbox>
      )}
      {type === 'toggle' && (
        <lp-toggle>
          <slot />
        </lp-toggle>
      )}
    </>
  );
};

SelectOption.defaultProps = {
  type: 'default',
};

export default SelectOption
