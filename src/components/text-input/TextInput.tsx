import React, { SyntheticEvent, useCallback, useContext, useLayoutEffect, useRef, useState } from 'react';
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
] as const;

export type TextInputEvents = typeof events[number]

const TextInput: TextInputComponent = ({ theme, size, textAlign, error, value, defaultValue, ...props }) => {
  const inputElRef = useRef<HTMLInputElement>(null);

  const [isIconLeftExist, setIsIconLeftExist] = useState<boolean>(false);
  const [isIconRightExist, setIsIconRightExist] = useState<boolean>(false);

  const dispatch = useContext(EventContext);

  const inputEventHandler = useCallback((type: TextInputEvents) => (e: React.SyntheticEvent<HTMLInputElement>): void => {
    dispatch(new CustomEvent(type, e));
  }, [dispatch]);

  useLayoutEffect(() => {
    const rootNode = inputElRef.current?.getRootNode();

    if (rootNode) {
      const { host } = rootNode as ShadowRoot;

      setIsIconLeftExist(!!host.querySelector('[slot="icon-left"]'));
      setIsIconRightExist(!!host.querySelector('[slot="icon-right"]'));
    }
  }, []);

  return (
    <>
      <slot name="icon-left" />

      <Styled styles={styles} scoped={false}>
        <slot>
          <input
            {...props}
            ref={inputElRef}
            className={classNames({
              'with-icon-left': isIconLeftExist,
              'with-icon-right': (error || isIconRightExist),
            })}
            defaultValue={String(value) || defaultValue}
            onBlur={inputEventHandler('blur')}
            onChange={inputEventHandler('change')}
            onFocus={inputEventHandler('focus')}
            onInput={inputEventHandler('input')}
            onKeyDown={inputEventHandler('key-down')}
            onKeyPress={inputEventHandler('key-press')}
            onKeyUp={inputEventHandler('key-up')}
          />
        </slot>
      </Styled>

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
