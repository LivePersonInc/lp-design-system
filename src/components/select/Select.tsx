import React, { useCallback, useContext, useEffect, useRef } from 'react';
import { EventContext, Styled } from 'direflow-component';

import { useHostElement } from 'lpds/common/hooks';

import { Theme } from 'lpds/styles/common';

import 'lpds/components/dropdown';
import 'lpds/components/text-input';
import 'lpds/components/checkbox';
import 'lpds/components/toggle';

import 'lpds/icons/requested';

import styles from './Select.scss';

export type SelectTextAligners = 'left' | 'center' | 'right'

export type SelectProps = JSX.IntrinsicElements['select'] & {
  theme?: Theme
  withSelectAll?: boolean | 'toggle'
}

export type SelectComponent = React.FC<SelectProps>

const Select: SelectComponent = ({ withSelectAll }) => {
  const dropdownElRef = useRef<HTMLDivElement>(null);

  const dispatch = useContext(EventContext);

  const { getHostElement } = useHostElement();

  const windowKeyDownHandler = useCallback((e: KeyboardEvent): void => {
    const options = getHostElement(dropdownElRef).querySelectorAll<HTMLOptionElement>('lp-select-option');

    if (!options) {
      return;
    }

    const focusedOptionIndex = Array.from(options).findIndex(el => el === document.activeElement);

    const selectedOptionIndex = (
      focusedOptionIndex !== -1 ? focusedOptionIndex : Array.from(options).findIndex(el => (
        el.hasAttribute('selected') && el.getAttribute('selected') !== 'false')
      )
    );

    switch (e.code) {
      case 'ArrowUp':
        if (selectedOptionIndex === -1) {
          options[options.length - 1]?.focus();
        } else if (selectedOptionIndex > 0) {
          options[selectedOptionIndex - 1]?.focus();
        }

        break;
      case 'ArrowDown':
        if (selectedOptionIndex === -1) {
          options[0]?.focus();
        } else if (selectedOptionIndex < options.length - 1) {
          options[selectedOptionIndex + 1]?.focus();
        }

        break;
      case 'Enter':
        if (selectedOptionIndex !== -1) {
          options[selectedOptionIndex]?.click();
        }

        break;
    }
  }, [getHostElement]);

  const dropdownOpenHandler = useCallback((): void => {
    dropdownElRef.current?.querySelector('lp-text-input')?.classList.add('open');

    window.addEventListener<'keydown'>('keydown', windowKeyDownHandler);
  }, [windowKeyDownHandler]);

  const dropdownCloseHandler = useCallback((): void => {
    dropdownElRef.current?.querySelector('lp-text-input')?.classList.remove('open');

    window.removeEventListener<'keydown'>('keydown', windowKeyDownHandler);
  }, [windowKeyDownHandler]);

  const optionSelectHandler = useCallback((e): void => {
    const target = e.target as HTMLOptionElement

    target.parentElement?.querySelectorAll('[selected]:not([selected="false"])').forEach(element => {
      element.removeAttribute('selected');
    });

    target.setAttribute('selected', 'true');

    const inputEl = dropdownElRef.current?.querySelector('lp-text-input') as HTMLInputElement;
    if (inputEl) {
      inputEl.setAttribute('value', target.innerText);
    }

    dispatch(new CustomEvent('change', { detail: e.target }));
  }, [dispatch]);

  useEffect(() => {
    dropdownElRef.current?.addEventListener('open', dropdownOpenHandler);
    dropdownElRef.current?.addEventListener('close', dropdownCloseHandler);
    dropdownElRef.current?.addEventListener('select', optionSelectHandler, true);
  }, [dropdownOpenHandler, dropdownCloseHandler, optionSelectHandler]);

  return (
    <>
      <Styled styles={styles} scoped={false}>
        <div />
      </Styled>

      <lp-dropdown ref={dropdownElRef} closeOnContentClick={false}>
        <lp-text-input slot="toggle" />

        <div slot="content">
          {!!withSelectAll && (
            withSelectAll === 'toggle' ? <lp-toggle label="Select all" /> : <lp-checkbox label="Select all" />
          )}

          <slot name="suggestion" />

          <slot />

          <slot name="actions" />
        </div>
      </lp-dropdown>
    </>
  );
};

Select.defaultProps = {
  theme: 'dark',
  withSelectAll: false,
};

export default Select
