import React, { useCallback, useContext, useLayoutEffect, useRef, useState } from 'react';
import { EventContext } from 'direflow-component';
import classNames from 'classnames';

import { Theme } from '../../common/types';
import Styled from '../../common/Styled';

import '@liveperson-design-system/icons/requested';

import styles from './Textarea.scss';

export type TextareaTextAligners = 'left' | 'center' | 'right'

export type TextareaCustomProps = {
  theme?: Theme
  textAlign?: TextareaTextAligners
  error?: boolean
  value?: string
  defaultValue?: string
  resizable?: boolean
}

export type TextareaProps = JSX.IntrinsicElements['textarea'] & TextareaCustomProps

export type TextareaComponent = React.FC<TextareaProps>

export const events = [
  'blur',
  'change',
  'focus',
  'input',
  'key-down',
  'key-press',
  'key-up',
] as const;

export type TextareaEvents = typeof events[number]

const Textarea: TextareaComponent = ({ theme, textAlign, error, value, defaultValue, resizable, ...props }) => {
  const textareaElRef = useRef<HTMLTextAreaElement>(null);

  const [isIconLeftExist, setIsIconLeftExist] = useState<boolean>(false);
  const [isIconRightExist, setIsIconRightExist] = useState<boolean>(false);

  const dispatch = useContext(EventContext);

  const inputEventHandler = useCallback((type: TextareaEvents) => (e: React.SyntheticEvent<HTMLTextAreaElement>): void => {
    dispatch(new CustomEvent(type, e));
  }, [dispatch]);

  useLayoutEffect(() => {
    const rootNode = textareaElRef.current?.getRootNode();

    if (rootNode) {
      const { host } = rootNode as ShadowRoot;

      setIsIconLeftExist(!!host.querySelector('[slot="icon-left"]'));
      setIsIconRightExist(!!host.querySelector('[slot="icon-right"]'));
    }
  }, []);

  return (
    <Styled styles={styles}>
      <slot name="icon-left" />

      <textarea
        {...props}
        ref={textareaElRef}
        className={classNames({
          'with-icon-left': isIconLeftExist,
          'with-icon-right': (error || isIconRightExist),
        })}
        onBlur={inputEventHandler('blur')}
        onChange={inputEventHandler('change')}
        onFocus={inputEventHandler('focus')}
        onInput={inputEventHandler('input')}
        onKeyDown={inputEventHandler('key-down')}
        onKeyPress={inputEventHandler('key-press')}
        onKeyUp={inputEventHandler('key-up')}
      >
        {value || defaultValue}
      </textarea>

      <slot name="icon-right">
        {error && <lp-requested-icon />}
      </slot>
    </Styled>
  );
};

Textarea.defaultProps = {
  theme: 'dark',
  textAlign: 'left',
  error: false,
  resizable: false,
  value: '',
  disabled: false,
  readOnly: false,
};

export default Textarea
