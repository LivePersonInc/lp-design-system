import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { EventContext } from 'direflow-component';

import Styled from 'lpds/common/Styled';

import { Theme } from 'lpds/styles/common';

import styles from './NumberInput.scss';

export type NumberInputSizes = 'large' | 'medium'
export type NumberInputTextAligners = 'left' | 'center' | 'right'

export type NumberInputProps = Omit<JSX.IntrinsicElements['input'], 'size'> & {
  theme?: Theme
  size?: NumberInputSizes
  textAlign?: NumberInputTextAligners
  error?: boolean
}

export type NumberInputComponent = React.FC<NumberInputProps>

export const events = [
  'blur',
  'change',
  'focus',
  'input',
  'key-down',
  'key-press',
  'key-up',
];

const NumberInput: NumberInputComponent = (
  { theme, size, textAlign, error, value: valueProp, defaultValue, children, ...props }
) => {
  const inputElRef = useRef<HTMLInputElement>(null);

  const [value, setValue] = useState<string>(
    valueProp ? String(valueProp) : (defaultValue ? String(defaultValue) : '')
  );

  const dispatch = useContext(EventContext);

  const inputEventHandler = useCallback((e: React.SyntheticEvent<HTMLInputElement>): void => {
    e.persist();

    if (e.type === 'change') {
      setValue((e.target as HTMLInputElement).value);
    }

    dispatch(new CustomEvent(e.type, { detail: e.target }));
  }, [dispatch]);

  const inputsEvents = useMemo(() => ({
    onBlur: inputEventHandler,
    onChange: inputEventHandler,
    onFocus: inputEventHandler,
    onInput: inputEventHandler,
    onKeyDown: inputEventHandler,
    onKeyPress: inputEventHandler,
    onKeyUp: inputEventHandler,
  }), [inputEventHandler]);

  const buttonClickHandler = useCallback((action: 'up' | 'down') => (): void => {
    switch (action) {
      case 'up':
        inputElRef.current?.stepUp();
        break;
      case 'down':
        inputElRef.current?.stepDown();
        break;
    }
  }, []);

  useEffect(() => {
    setValue(valueProp ? String(valueProp) : '');
  }, [valueProp]);

  return (
    <Styled styles={styles}>
      <input
        {...props}
        ref={inputElRef}
        // @ts-ignore
        part="input"
        type="number"
        value={value}
        readOnly
        {...inputsEvents}
      />

      <div className="buttons">
        <button type="button" disabled={props.disabled || props.readOnly} onClick={buttonClickHandler('up')} />
        <button type="button" disabled={props.disabled || props.readOnly} onClick={buttonClickHandler('down')} />
      </div>
    </Styled>
  );
};

NumberInput.defaultProps = {
  theme: 'dark',
  size: 'large',
  textAlign: 'left',
  error: false,
  value: '',
  disabled: false,
  readOnly: false,
};

export default NumberInput
