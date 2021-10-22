import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { EventContext } from 'direflow-component';

import { Theme } from '../../common/types';
import { scaleValue } from '../../common/helpers';
import Styled from '../../common/Styled';

import '../chip';

import styles from './SliderInput.scss';

export type SliderInputCustomProps = {
  theme?: Theme
  min?: number
  max?: number
  step?: number
  value?: string | number | (string | number)[]
  defaultValue?: SliderInputCustomProps['value']
  range?: boolean
  disabled: boolean
  readOnly: boolean
}

export type SliderInputProps = SliderInputCustomProps

export type SliderInputComponent = React.FC<SliderInputProps>

const defaultProps: Required<Omit<SliderInputProps, 'defaultValue'>> = {
  theme: 'dark',
  min: 0,
  max: 10,
  step: 1,
  value: '',
  range: false,
  disabled: false,
  readOnly: false,
};

const parseValue = (value?: SliderInputCustomProps['value']) => {
  if (typeof value === 'string') {
    try {
      return JSON.parse(value);
    } catch {
      return value;
    }
  } else {
    return value;
  }
};

const getValue = (
  value: SliderInputCustomProps['value'] = defaultProps.value,
  min = defaultProps.min,
  max = defaultProps.max,
  range = defaultProps.range,
): number | number[] => {
  let newValue = (
    range
      ? (Array.isArray(value) ? value.map(v => +v) : (value !== '' ? [+value, +value] : [+min, +max]))
      : (Array.isArray(value) ? +value[0] : (value !== '' ? +value : +defaultProps.value))
  );

  if (Array.isArray(newValue)) {
    if (newValue[0] < +min) {
      newValue[0] = +min;
    }

    if (newValue[1] > +max) {
      newValue[1] = +min;
    }

    if (newValue[0] > newValue[1]) {
      newValue[0] = newValue[1];
    }
  } else if (newValue > +max) {
    newValue = +max;
  }

  return newValue;
};

const SliderInput: SliderInputComponent = ({ min, max, step, value, defaultValue, range, disabled, readOnly }) => {
  const trackElRef = useRef<HTMLDivElement>(null);
  const draggingElRef = useRef<HTMLDivElement>();

  const mounted = useRef<boolean>(false);
  const mouseDownPosition = useRef<number>(0);

  const [currentValue, setCurrentValue] = useState<number | number[]>(
    getValue(parseValue(defaultValue || value), min, max, range),
  );

  const dispatch = useContext(EventContext);

  const windowMouseMoveHandler = useCallback((e: MouseEvent): void => {
    const { left = 0, width = 0 } = trackElRef.current?.getBoundingClientRect() || {};

    const value = Math.round(
      scaleValue(
        e.clientX - left, 0, width, +(min || defaultProps.min), +(max || defaultProps.max)
      ) / +(step || defaultProps.step)
    );

    if (range) {
      setCurrentValue(state => {
        const isFrom = draggingElRef.current?.getAttribute('part') === 'thumb from';

        state = (Array.isArray(state) ? state : [state, state]);

        if ((isFrom && value > state[1]) || (!isFrom && value < state[0])) {
          return state;
        }

        return (state[+!isFrom] !== value ? (isFrom ? [value, state[1]] : [state[0], value]) : state);
      });
    } else {
      setCurrentValue(value);
    }
  }, [min, max, step, range]);

  const windowMouseUpHandler = useCallback((): void => {
    draggingElRef.current = undefined;

    window.removeEventListener('mousemove', windowMouseMoveHandler);
    window.removeEventListener('mouseup', windowMouseUpHandler);
  }, [windowMouseMoveHandler]);

  const thumbMouseDownHandler = useCallback((e: React.MouseEvent<HTMLDivElement>): void => {
    if (disabled || readOnly) {
      return;
    }

    draggingElRef.current = e.target as HTMLDivElement;

    mouseDownPosition.current = e.clientX;

    window.addEventListener('mousemove', windowMouseMoveHandler);
    window.addEventListener('mouseup', windowMouseUpHandler);
  }, [disabled, readOnly, windowMouseMoveHandler, windowMouseUpHandler]);

  const scaledStylesValue = useMemo<number | number[]>(() => {
    const getScaledValue = (v: number): number => (
      scaleValue(v, +(min || defaultProps.min), +(max || defaultProps.max), 0, 100)
    );

    return (Array.isArray(currentValue) ? currentValue.map(getScaledValue) : getScaledValue(currentValue));
  }, [currentValue, min, max]);

  const activeStyles = useMemo<React.CSSProperties>(() => (
    Array.isArray(scaledStylesValue)
      ? {
        width: `calc(${scaledStylesValue[1]}% - ${scaledStylesValue[0]}%)`,
        marginLeft: `${scaledStylesValue[0]}%`,
      }
      : {
        width: `${scaledStylesValue}%`,
      }
  ), [scaledStylesValue]);

  const thumbFromStyles = useMemo<React.CSSProperties>(() => ({
    left: `${(Array.isArray(scaledStylesValue) ? scaledStylesValue[0] : scaledStylesValue)}%`,
  }), [scaledStylesValue]);

  const thumbToStyles = useMemo<React.CSSProperties>(() => ({
    left: `${(Array.isArray(scaledStylesValue) ? scaledStylesValue[1] : scaledStylesValue)}%`,
  }), [scaledStylesValue]);

  useEffect(() => {
    setCurrentValue(getValue(parseValue(value), min, max, range));
  }, [value, min, max, range]);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      dispatch(new CustomEvent('slider-input-change', { detail: currentValue }));
    }
  }, [dispatch, currentValue]);

  return (
    <Styled styles={styles}>
      <div
        ref={trackElRef}
        // @ts-ignore
        part="track"
      >
        <div
          // @ts-ignore
          part="active"
          style={activeStyles}
        />

        {range && (
          <div
            // @ts-ignore
            part="thumb from"
            style={thumbFromStyles}
            onMouseDown={thumbMouseDownHandler}
          />
        )}

        <div
          // @ts-ignore
          part={`thumb${range ? ' to' : ''}`}
          style={thumbToStyles}
          onMouseDown={thumbMouseDownHandler}
        />
      </div>
    </Styled>
  );
};

SliderInput.defaultProps = defaultProps;

export default SliderInput
