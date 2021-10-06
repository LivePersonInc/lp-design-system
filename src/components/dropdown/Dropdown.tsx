import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { EventContext } from 'direflow-component';
import classNames from 'classnames';

import { useHostElement } from 'lpds/common/hooks';

import Styled from 'lpds/common/Styled';

import styles from './Dropdown.scss';

export type DropdownContentPlacements = 'auto' | 'top' | 'bottom' | 'left' | 'right'

export type DropdownProps = JSX.IntrinsicElements['div'] & {
  open?: boolean
  contentPlacement?: DropdownContentPlacements
  parentSelector?: string
  parentOffset?: string | number
  closeOnContentClick?: boolean
  closeOnBlur?: boolean
  closeOnEscape?: boolean
}

export type DropdownComponent = React.FC<DropdownProps>

const Dropdown: DropdownComponent = (
  { open, contentPlacement, parentSelector, parentOffset, closeOnContentClick, closeOnBlur, closeOnEscape }
) => {
  const toggleSlotElRef = useRef<HTMLSlotElement>(null);
  const contentSlotElRef = useRef<HTMLSlotElement>(null);

  const [isOpen, setIsOpen] = useState<boolean>(!!open);
  const [show, setShow] = useState<'top' | 'bottom' | 'left' | 'right'>();

  const dispatch = useContext(EventContext);

  const { getHostElement, hostHasAttribute, hostGetAttribute } = useHostElement(toggleSlotElRef);

  const dropdownOpen = useCallback((): void => {
    if (!hostGetAttribute('open')) {
      setIsOpen(true);
    }

    dispatch(new CustomEvent('dropdown-open', { composed: true }));
  }, [hostGetAttribute, dispatch]);
  const dropdownClose = useCallback((): void => {
    if (!hostGetAttribute('open')) {
      setIsOpen(false);
    }

    dispatch(new CustomEvent('dropdown-close', { composed: true }));
  }, [hostGetAttribute, dispatch]);

  const toggleClickHandler = useCallback((): void => {
    if (isOpen) {
      dropdownClose();
    } else {
      dropdownOpen();
    }
  }, [isOpen, dropdownClose, dropdownOpen]);

  const contentClickHandler = useCallback((): void => {
    if (closeOnContentClick) {
      dropdownClose();
    }
  }, [closeOnContentClick, dropdownClose]);

  const windowClickHandler = useCallback((e: MouseEvent): void => {
    if (!getHostElement()?.contains(e.target as Node)) {
      if (closeOnBlur) {
        dropdownClose();
      }

      dispatch(new CustomEvent('dropdown-click-outside', { detail: e.target, composed: true }));
    }
  }, [getHostElement, closeOnBlur, dropdownClose, dispatch]);

  const windowKeydownHandler = useCallback((e: KeyboardEvent): void => {
    if (e.code === 'Escape') {
      dropdownClose();
    }
  }, [dropdownClose]);

  useEffect(() => {
    if (hostHasAttribute('open')) {
      setIsOpen(!!open);
    }
  }, [open, hostHasAttribute]);

  useEffect(() => {
    toggleSlotElRef.current?.addEventListener<'click'>('click', toggleClickHandler);
  }, [toggleClickHandler]);

  useEffect(() => {
    if (isOpen) {
      contentSlotElRef.current?.addEventListener<'click'>('click', contentClickHandler);
    } else {
      contentSlotElRef.current?.removeEventListener<'click'>('click', contentClickHandler);
    }
  }, [isOpen, contentClickHandler]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener<'click'>('click', windowClickHandler);
    } else {
      window.removeEventListener<'click'>('click', windowClickHandler);
    }
  }, [isOpen, windowClickHandler]);

  useEffect(() => {
    if (closeOnEscape && isOpen) {
      window.addEventListener<'keydown'>('keydown', windowKeydownHandler);
    } else {
      window.removeEventListener<'keydown'>('keydown', windowKeydownHandler);
    }
  }, [closeOnEscape, isOpen, windowKeydownHandler]);

  useEffect(() => {
    if (isOpen) {
      if (contentPlacement === undefined || contentPlacement === 'auto') {
        if (contentSlotElRef.current) {
          const { bottom, right } = contentSlotElRef.current.getBoundingClientRect();

          let parentRight = window.innerWidth;
          let parentBottom = window.innerHeight;

          if (parentSelector) {
            const parentElement = getHostElement(contentSlotElRef)?.closest(parentSelector);

            if (parentElement) {
              const parentBounding = parentElement.getBoundingClientRect();

              parentRight = parentBounding.right;
              parentBottom = parentBounding.bottom;
            }
          }

          const offset = (parentOffset ? +parentOffset : 15);

          if (bottom > parentBottom - offset) {
            setShow('top');
          } else {
            setShow('bottom');
          }

          if (right > parentRight - offset) {
            contentSlotElRef.current.style.transform = `translateX(${parentRight - right - offset}px)`;
          }
        }
      } else {
        setShow(contentPlacement);
      }
    } else {
      setShow(undefined);
    }
  }, [isOpen, contentPlacement, getHostElement, parentOffset, parentSelector]);

  return (
    <Styled styles={styles} scoped={false}>
      <slot
        ref={toggleSlotElRef}
        name="toggle"
        // @ts-ignore
        part={classNames('toggle', { open: isOpen }, show)}
      />

      {isOpen && (
        <slot
          ref={contentSlotElRef}
          className={classNames({
            show: show !== undefined,
          }, show)}
          name="content"
          // @ts-ignore
          part={classNames('content', { open: isOpen }, show)}
        />
      )}
    </Styled>
  );
};

Dropdown.defaultProps = {
  open: false,
  contentPlacement: 'auto',
  parentSelector: '',
  parentOffset: 15,
  closeOnContentClick: true,
  closeOnBlur: true,
  closeOnEscape: true,
};

export default Dropdown
