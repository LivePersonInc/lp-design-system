import React, { useCallback, useContext, useLayoutEffect, useRef } from 'react';
import { EventContext, Styled } from 'direflow-component';

import Radio, { RadioProps, radioDefaultProps } from 'lpds/components/radio/Radio';

import styles from './RadioGroup.scss';

export type RadioGroupCustomProps = {
  selected?: string | number
}

export type RadioGroupProps = Omit<RadioProps, 'label'> & RadioGroupCustomProps

export type RadioGroupComponent = React.FC<RadioGroupProps>

const RadioGroup: RadioGroupComponent = ({ name, selected, children, ...props }) => {
  const slotElRef = useRef<HTMLSlotElement>(null);

  const dispatch = useContext(EventContext);

  const getRadioElements = useCallback((): HTMLInputElement[] => (
    slotElRef.current?.assignedElements() as HTMLInputElement[] || []
  ), []);

  const radioChangeHandler = useCallback((e): void => {
    const elements = getRadioElements();

    elements.filter(element => element.hasAttribute('checked')).forEach(element => {
      element.removeAttribute('checked');
    });

    e.target.setAttribute('checked', '');

    dispatch(new CustomEvent<HTMLInputElement>('change', { detail: e.target }));
  }, [dispatch]);

  useLayoutEffect(() => {
    setTimeout(() => {
      const elements = getRadioElements();

      const defaultPropsKeys = Object.keys(radioDefaultProps) as Array<keyof Omit<typeof radioDefaultProps, 'label'>>;

      elements?.forEach(element => {
        defaultPropsKeys.forEach(key => {
          if (radioDefaultProps[key] === props[key]) {
            element.removeAttribute(key);
          } else {
            element.setAttribute(key, String(props[key]));
          }
        });

        if (selected) {
          if (selected === element.getAttribute('value')) {
            element.setAttribute('checked', '');
          } else {
            element.removeAttribute('checked');
          }
        }

        element.addEventListener('change', radioChangeHandler);
      });
    });
  }, [getRadioElements, props, radioChangeHandler]);

  return (
    <Styled styles={styles} scoped={false}>
      <slot ref={slotElRef} />
    </Styled>
  );
};

RadioGroup.defaultProps = {
  ...Radio.defaultProps,
  name: '',
  selected: '',
};

export default RadioGroup
