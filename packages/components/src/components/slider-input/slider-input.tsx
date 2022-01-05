import { Component, h, Prop, Event, State, Watch, EventEmitter, Element } from '@stencil/core';

import { Theme } from '../../utils/types';
import { scaleValue } from '../../utils/helpers';
import { Query } from '../../utils/decorators';

export type SliderInputProps = {
  theme?: Theme
  min?: number
  max?: number
  step?: number
  range?: boolean
  value?: number | number[]
  disabled: boolean
  readOnly: boolean
}

@Component({
  tag: 'lp-slider-input',
  styleUrl: 'slider-input.scss',
  shadow: true,
})
export class SliderInput {
  static defaultProps: Required<Omit<SliderInputProps, 'defaultValue'>> = {
    theme: 'dark',
    min: 0,
    max: 10,
    step: 1,
    range: false,
    value: 0,
    disabled: false,
    readOnly: false,
  };

  private draggingEl: HTMLDivElement | null = null;

  @Element() hostEl: HTMLElement;

  @Query('[part="track"]') trackEl: HTMLDivElement;

  @Prop() theme: Theme;
  @Prop() min: number = SliderInput.defaultProps.min;
  @Prop() max: number = SliderInput.defaultProps.max;
  @Prop() step: number = SliderInput.defaultProps.step;
  @Prop() range: boolean;
  @Prop({ mutable: true }) value: number | number[];
  @Prop() disabled: boolean;
  @Prop() readOnly: boolean;

  @State() valueState: number | number[] = SliderInput.defaultProps.min;

  @State() scaledStylesValue: number | number[];

  @State() activeStyles = {};
  @State() thumbFromStyles = {};
  @State() thumbToStyles = {};

  @Event({
    eventName: 'change',
    bubbles: true,
    cancelable: true,
    composed: true,
  }) changeEvent: EventEmitter<number | number[]>;

  @Watch('min')
  minPropChangeHandler(newValue: number) {
    this.valueState = this.getValue(this.parseValue(this.value), newValue, this.max, this.range);
  }

  @Watch('max')
  maxPropChangeHandler(newValue: number) {
    this.valueState = this.getValue(this.parseValue(this.value), this.min, newValue, this.range);
  }

  @Watch('range')
  rangePropChangeHandler(newValue: boolean) {
    this.valueState = this.getValue(this.parseValue(this.value), this.min, this.max, newValue);
  }

  @Watch('value')
  valuePropChangeHandler(newValue: number | number[]) {
    this.valueState = this.getValue(this.parseValue(newValue), this.min, this.max, this.range);
  }

  @Watch('valueState')
  currentValueStateChangeHandler(newValue: number | number[]) {
    this.setScaledStylesValue(newValue);

    this.changeEvent.emit(newValue);
  }

  @Watch('scaledStylesValue')
  scaledStylesValueStateChangeValue(newValue: number | number[]) {
    this.activeStyles = (
      Array.isArray(newValue)
        ? {
          width: `calc(${newValue[1]}% - ${newValue[0]}%)`,
          marginLeft: `${newValue[0]}%`,
        }
        : {
          width: `${newValue}%`,
        }
    );

    this.thumbFromStyles = ({
      left: `${(Array.isArray(newValue) ? newValue[0] : newValue)}%`,
    });

    this.thumbToStyles = ({
      left: `${(Array.isArray(newValue) ? newValue[1] : newValue)}%`,
    });
  }

  componentWillLoad() {
    this.valueState = this.getValue(this.parseValue(this.value), this.min, this.max, this.range);

    this.setScaledStylesValue(this.valueState);
  }

  private parseValue(value?: SliderInputProps['value']) {
    if (typeof value === 'string') {
      try {
        return JSON.parse(value);
      } catch {
        return value;
      }
    }

    return value;
  };

  private getValue(
    value: SliderInputProps['value'] = this.value,
    min: number = this.min,
    max: number = this.max,
    range: boolean = false,
  ): number | number[] {
    let newValue = (
      range
        ? (Array.isArray(value) ? value : (value !== undefined ? [value, value] : [min, max]))
        : (Array.isArray(value) ? +value[0] : (value || SliderInput.defaultProps.value))
    );

    if (Array.isArray(newValue)) {
      if (newValue[0] < min) {
        newValue[0] = min;
      }

      if (newValue[1] > max) {
        newValue[1] = min;
      }

      if (newValue[0] > newValue[1]) {
        newValue[0] = newValue[1];
      }
    } else if (newValue > max) {
      newValue = max;
    }

    return newValue;
  };

  private setScaledStylesValue(value: number | number[] = this.value): void {
    const getScaledValue = (v: number): number => scaleValue(v, this.min, this.max, 0, 100);

    this.scaledStylesValue = (Array.isArray(value) ? value.map(getScaledValue) : getScaledValue(value));
  }

  private windowMouseMoveHandler = (e: MouseEvent): void => {
    const { left = 0, width = 0 } = this.trackEl.getBoundingClientRect() || {};

    const value = Math.round(scaleValue(e.clientX - left, 0, width, this.min, this.max) / this.step);

    if (this.range) {
      const isFrom = this.draggingEl.getAttribute('part') === 'thumb-from';

      const newCurrentValue = (
        Array.isArray(this.valueState) ? [...this.valueState] : [this.valueState, this.valueState]
      );

      this.valueState = (
        ((isFrom && value > newCurrentValue[1]) || (!isFrom && value < newCurrentValue[0]))
          ? newCurrentValue
          : (
            newCurrentValue[+!isFrom] !== value
              ? (isFrom ? [value, newCurrentValue[1]] : [newCurrentValue[0], value])
              : newCurrentValue
          )
      );
    } else {
      this.valueState = value;
    }
  };

  private windowMouseUpHandler = (): void => {
    this.draggingEl = null;

    window.removeEventListener('mousemove', this.windowMouseMoveHandler);
    window.removeEventListener('mouseup', this.windowMouseUpHandler);
  };

  private thumbMouseDownHandler = (e: MouseEvent): void => {
    if (this.disabled || this.readOnly) {
      return;
    }

    this.draggingEl = e.target as HTMLDivElement;

    window.addEventListener('mousemove', this.windowMouseMoveHandler);
    window.addEventListener('mouseup', this.windowMouseUpHandler);
  };

  render() {
    return (
      <div part="track">
        <div part="active" style={this.activeStyles}/>

        {(
          this.range
            ? ([
              <div part="thumb-from" style={this.thumbFromStyles} onMouseDown={this.thumbMouseDownHandler} />,
              <div part="thumb-to" style={this.thumbToStyles} onMouseDown={this.thumbMouseDownHandler} />,
            ])
            : <div part="thumb" style={this.thumbToStyles} onMouseDown={this.thumbMouseDownHandler} />
        )}
      </div>
    );
  }
}
