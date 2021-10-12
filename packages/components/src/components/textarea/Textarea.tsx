import React, { useCallback, useContext, useLayoutEffect, useRef, useState } from 'react';
import { EventContext, Styled } from 'direflow-component';
import classNames from 'classnames';

import { Theme } from '../../common/types';

import '@liveperson-design-system/icons/requested';

import styles from './Textarea.scss';

export type TextareaTextAligners = 'left' | 'center' | 'right'

export type TextareaProps = JSX.IntrinsicElements['textarea'] & {
  theme?: Theme
  textAlign?: TextareaTextAligners
  error?: boolean
  value?: string
  defaultValue?: string
  resizable?: boolean
}

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
    <>
      <slot name="icon-left" />

      <Styled styles={styles} scoped={false}>
        <slot>
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
        </slot>
      </Styled>

      <slot name="icon-right">
        {error && <lp-requested-icon />}
      </slot>
    </>
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
