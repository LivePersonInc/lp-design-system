import React, { useCallback, useContext, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { EventContext, Styled } from 'direflow-component';
import classNames from 'classnames';

import { Theme } from 'lpds/styles/common';

import 'lpds/icons/requested';

import styles from './TextInput.scss';

export type TextInputSizes = 'large' | 'medium'
export type TextInputTextAligners = 'left' | 'center' | 'right'

export type TextInputProps = Omit<JSX.IntrinsicElements['input'], 'size'> & {
  theme?: Theme
  size?: TextInputSizes
  textAlign?: TextInputTextAligners
  error?: boolean
}

export type TextInputComponent = React.FC<TextInputProps>

export const events = [
  'blur',
  'change',
  'focus',
  'input',
  'key-down',
  'key-press',
  'key-up',
];

const TextInput: TextInputComponent = (
  { theme, size, textAlign, error, value: valueProp, defaultValue, children, ...props }
) => {
  const inputElRef = useRef<HTMLInputElement>(null);

  const [isIconLeftExist, setIsIconLeftExist] = useState<boolean>(false);
  const [isIconRightExist, setIsIconRightExist] = useState<boolean>(false);

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

  useLayoutEffect(() => {
    const rootNode = inputElRef.current?.getRootNode();

    if (rootNode) {
      const { host } = rootNode as ShadowRoot;

      setIsIconLeftExist(!!host.querySelector('[slot="icon-left"]'));
      setIsIconRightExist(!!host.querySelector('[slot="icon-right"]'));
    }
  }, []);

  useEffect(() => {
    setValue(valueProp ? String(valueProp) : '');
  }, [valueProp]);

  return (
    <>
      <Styled styles={styles} scoped={false}>
        <div />
      </Styled>

      <slot name="icon-left" />

      <input
        {...props}
        ref={inputElRef}
        className={classNames({
          'with-icon-left': isIconLeftExist,
          'with-icon-right': (error || isIconRightExist),
        })}
        // @ts-ignore
        part="input"
        type="text"
        value={value}
        {...inputsEvents}
      />

      <slot name="icon-right">
        {error && <lp-requested-icon />}
      </slot>
    </>
  );
};

TextInput.defaultProps = {
  theme: 'dark',
  size: 'large',
  textAlign: 'left',
  error: false,
  value: '',
  disabled: false,
  readOnly: false,
};

export default TextInput
