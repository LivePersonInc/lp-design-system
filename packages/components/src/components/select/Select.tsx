import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { EventContext } from 'direflow-component';

import { Theme } from '../../common/types';
import { useHostElement } from '../../common/hooks';
import Styled from '../../common/Styled';

import '../dropdown';
import '../text-input';
import { ChipGroupProps } from '../chip/ChipGroup';
import '../chip';
import '../checkbox';

import styles from './Select.scss';

export type SelectProps = JSX.IntrinsicElements['select'] & {
  theme?: Theme
  search?: boolean
  withSelectAll?: false | string
}

export type SelectComponent = React.FC<SelectProps>

type Selected = {
  label: string
  value: string
}

type GetElementTypes = {
  'dropdown-toggle': HTMLDivElement
  'chip-group': Element & ChipGroupProps
  'selected-value': HTMLDivElement
  'select-input': HTMLInputElement
  'select-all': HTMLInputElement
}

const Select: SelectComponent = ({ search, withSelectAll, multiple }) => {
  const dropdownElRef = useRef<HTMLDivElement>(null);

  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<Selected | Selected[]>();

  const dispatch = useContext(EventContext);

  const { getHostElement } = useHostElement(dropdownElRef);

  const getElement = useCallback(<K extends keyof GetElementTypes>(type: K): GetElementTypes[K] | undefined | null => {
    switch (type) {
      case 'dropdown-toggle':
        return dropdownElRef.current?.querySelector<GetElementTypes[K]>('.dropdown-toggle');
      case 'chip-group':
        return dropdownElRef.current?.querySelector<GetElementTypes[K]>('lp-chip-group');
      case 'selected-value':
        return dropdownElRef.current?.querySelector<GetElementTypes[K]>('.selected-value');
      case 'select-input':
        return dropdownElRef.current?.querySelector<GetElementTypes[K]>('.select-input');
      case 'select-all':
        return dropdownElRef.current?.querySelector<GetElementTypes[K]>('.select-all');
    }
  }, []);

  const getOptionsElements = useCallback((selector: string = ''): HTMLOptionElement[] => (
    (getHostElement()?.querySelectorAll(`lp-select-option${selector}`) || []) as HTMLOptionElement[]
  ), [getHostElement]);

  const windowKeyDownHandler = useCallback((e: KeyboardEvent): void => {
    const options = getOptionsElements(':not([hidden]:not([hidden="false"]))');

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
  }, [getOptionsElements]);

  const selectAllChangeHandler = useCallback((e): void => {
    if (e.detail.checked) {
      const selectedOptions: Selected[] = [];

      getOptionsElements(':not([hidden]:not([hidden="false"]))').forEach(option => {
        selectedOptions.push({
          label: option.innerText,
          value: option.getAttribute('value') || option.innerText,
        });
      });

      setSelected(selectedOptions);
    } else {
      setSelected(undefined);
    }
  }, [getOptionsElements]);

  const dropdownOpen = useCallback((): void => {
    getElement('dropdown-toggle')?.classList.add('open');

    window.addEventListener<'keydown'>('keydown', windowKeyDownHandler);

    getElement('select-all')?.addEventListener<'change'>('change', selectAllChangeHandler);

    setIsDropdownOpen(true);
  }, [getElement, windowKeyDownHandler, selectAllChangeHandler]);

  const dropdownClose = useCallback((): void => {
    getElement('dropdown-toggle')?.classList.remove('open');

    window.removeEventListener<'keydown'>('keydown', windowKeyDownHandler);

    getElement('select-all')?.removeEventListener<'change'>('change', selectAllChangeHandler);

    setIsDropdownOpen(false);
  }, [getElement, windowKeyDownHandler, selectAllChangeHandler]);

  const dropdownClickOutsideHandler = useCallback((e): void => {
    if (!getHostElement()?.contains(e.detail)) {
      dropdownClose();
    }
  }, [getHostElement, dropdownClose]);

  const dropdownToggleClickHandler = useCallback((e): void => {
    if (e.target === getElement('chip-group')) {
      return;
    }

    if (isDropdownOpen && e.target !== getElement('select-input')) {
      dropdownClose();
    } else {
      dropdownOpen();
    }
  }, [getElement, isDropdownOpen, dropdownClose, dropdownOpen]);

  const chipRemoveHandler = useCallback((e): void => {
    setSelected(state => (
      (Array.isArray(state) ? state : (state ? [state] : [])).filter(({ value }) => value !== e.detail.id)
    ));

    getHostElement()?.querySelector(`lp-select-option[value="${e.detail.id}"]`)
      ?.removeAttribute('selected');
  }, [getHostElement]);

  const selectInputInputHandler = useCallback((e): void => {
    const value = (e.target as HTMLInputElement).value.toLowerCase();

    const options = getOptionsElements();

    if (value) {
      options.forEach(option => {
        if ((option.innerText || option.getAttribute('label') || '').toLowerCase().includes(value)) {
          option.removeAttribute('hidden');
        } else {
          option.setAttribute('hidden', 'true');
        }
      });
    } else {
      options.forEach(option => {
        option.removeAttribute('hidden');
      });
    }
  }, [getOptionsElements]);

  const optionSelectHandler = useCallback((e): void => {
    const target = e.target as HTMLOptionElement

    const selected: Selected = {
      label: target.innerText,
      value: target.getAttribute('value') || target.innerText,
    };

    if (multiple) {
      setSelected(state => {
        const newState = (Array.isArray(state) ? [...state] : (state ? [state] : []));

        const selectedIndex = newState.findIndex(({ value }) => value === selected.value);

        if (selectedIndex !== -1) {
          newState.splice(selectedIndex, 1);
        } else {
          newState.push(selected);
        }

        return newState;
      });
    } else {
      setSelected(selected);

      dropdownClose();
    }

    if (search) {
      const selectInputEl = getElement('select-input');

      if (selectInputEl) {
        selectInputEl.value = '';
      }

      getOptionsElements().forEach(option => {
        option.removeAttribute('hidden');
      });
    }

    dispatch(new CustomEvent('change', { detail: e.target }));
  }, [multiple, dropdownClose, search, getElement, getOptionsElements, dispatch]);

  useEffect(() => {
    const dropdownEl = dropdownElRef.current;
    const dropdownToggleEl = getElement('dropdown-toggle');
    const chipGroupEl = getElement('chip-group');
    const selectInputEl = getElement('select-input');

    dropdownEl?.addEventListener('dropdown-click-outside', dropdownClickOutsideHandler);
    dropdownEl?.addEventListener('select', optionSelectHandler, true);
    dropdownToggleEl?.addEventListener('click', dropdownToggleClickHandler);
    chipGroupEl?.addEventListener('chip-remove', chipRemoveHandler, true);
    selectInputEl?.addEventListener('input', selectInputInputHandler);

    return () => {
      dropdownEl?.removeEventListener('dropdown-click-outside', dropdownClickOutsideHandler);
      dropdownEl?.removeEventListener('select', optionSelectHandler, true);
      dropdownToggleEl?.removeEventListener('click', dropdownToggleClickHandler);
      chipGroupEl?.removeEventListener('chip-remove', chipRemoveHandler, true);
      selectInputEl?.removeEventListener('input', selectInputInputHandler);
    };
  }, [getElement, dropdownClickOutsideHandler, optionSelectHandler, dropdownToggleClickHandler, chipRemoveHandler, selectInputInputHandler]);

  useEffect(() => {
    const chipGroupEl = getElement('chip-group');
    const selectedValueEl = getElement('selected-value');

    if (Array.isArray(selected)) {
      if (chipGroupEl) {
        chipGroupEl.chips = selected.map(({ label, value }) => ({
          id: value,
          size: 'small',
          label,
          removable: true,
        }));
      }
    } else if (selected) {
      if (selectedValueEl) {
        selectedValueEl.innerText = selected.label;
      }
    } else {
      if (chipGroupEl) {
        chipGroupEl.chips = [];
      }

      if (selectedValueEl) {
        selectedValueEl.innerText = '';
      }
    }

    const values = (Array.isArray(selected) ? selected : (selected ? [selected] : [])).map(({ value }) => value);

    const options = getOptionsElements();

    const selectAllEl = getElement('select-all');
    if (selectAllEl) {
      if (values.length > 0) {
        selectAllEl.setAttribute('checked', 'true');
        selectAllEl.setAttribute('indeterminate', (values.length !== options.length ? 'true' : 'false'));
      } else {
        selectAllEl.setAttribute('checked', 'false');
        selectAllEl.setAttribute('indeterminate', 'false');
      }
    }

    options.forEach(options => {
      if (values.includes(options.getAttribute('value') || '')) {
        options.setAttribute('selected', 'true');
      } else {
        options.removeAttribute('selected');
      }
    });
  }, [selected, getElement, getOptionsElements]);

  return (
    <Styled styles={styles}>
      <lp-dropdown ref={dropdownElRef} open={isDropdownOpen} closeOnContentClick={false} closeOnBlur={false}>
        <div slot="toggle" className="dropdown-toggle">
          {multiple ? <lp-chip-group /> : <div className="selected-value" />}

          {search && <input className="select-input" type="text" />}

          <div className="dropdown-toggle-icon">
            <svg>
              <path d="M7.96618 10.9662L3 6H13L7.96618 10.9662Z" />
            </svg>
          </div>
        </div>

        <div slot="content" className="options">
          {(multiple && withSelectAll) && (
            <lp-checkbox
              slot="content"
              // @ts-ignore
              class="select-all"
              label={withSelectAll}
            />
          )}

          <slot name="suggestions" />

          <slot />
        </div>

        <slot slot="content" name="actions" />
      </lp-dropdown>
    </Styled>
  );
};

Select.defaultProps = {
  theme: 'dark',
  search: false,
  withSelectAll: false,
  multiple: false,
};

export default Select
