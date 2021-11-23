import React, { useCallback, useContext, useLayoutEffect, useRef } from 'react';
import { EventContext } from 'direflow-component';

import Styled from '../../common/Styled';

import Radio, { RadioProps } from '../radio/Radio';

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
  }, [getRadioElements, dispatch]);

  useLayoutEffect(() => {
    setTimeout(() => {
      const elements = getRadioElements();

      const defaultPropsKeys = (Object.keys(Radio.defaultProps as RadioProps) as Array<keyof Omit<typeof Radio.defaultProps, 'label'>>)
        .filter(key => key !== 'label');

      elements?.forEach(element => {
        defaultPropsKeys.forEach(key => {
          if ((Radio.defaultProps as RadioProps)[key] === props[key]) {
            element.removeAttribute(key);
          } else {
            element.setAttribute(key, String(props[key]));
          }
        });

        if (selected) {
          if (String(selected) === element.getAttribute('value')) {
            element.setAttribute('checked', '');
          } else {
            element.removeAttribute('checked');
          }
        }

        element.addEventListener('change', radioChangeHandler);
      });
    });
  }, [getRadioElements, selected, props, radioChangeHandler]);

  return (
    <Styled styles={styles}>
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
