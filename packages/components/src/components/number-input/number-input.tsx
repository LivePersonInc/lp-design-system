import { Component, h, Host, Prop, State, Watch, Element } from '@stencil/core';

import { Theme } from '../../utils/types';
import { Query } from '../../utils/decorators';

export type NumberInputSizes = 'large' | 'medium'
export type NumberInputTextAligners = 'left' | 'center' | 'right'

@Component({
  tag: 'lp-number-input',
  styleUrl: 'number-input.scss',
  shadow: true,
})
export class NumberInput {
  @Element() hostEl: HTMLElement;

  @Query('input[type="number"]') inputEl: HTMLInputElement;

  @Prop() theme?: Theme;
  @Prop() size?: NumberInputSizes;
  @Prop() textAlign?: NumberInputTextAligners;
  @Prop() error?: boolean;
  @Prop() value?: string | number;
  @Prop() min?: string | number;
  @Prop() max?: string | number;
  @Prop() step?: string | number;
  @Prop() disabled?: boolean;
  @Prop() readOnly?: boolean;

  @State() valueState: '' | number = (this.value !== undefined ? +this.value : '');

  @Watch('value')
  valuePropChangeHandler(newValue?: string | number) {
    this.valueState = this.validateValue(newValue);
  }

  private validateValue(value: string | number): number {
    if (this.min !== undefined && +value < +this.min) {
      value = this.min;
    }

    if (this.max !== undefined && +value > +this.max) {
      value = this.max;
    }

    return +value;
  }

  private inputChangeHandler = (e): void => {
    this.valueState = this.validateValue((e.target as HTMLInputElement).value);
  };

  private buttonClickHandler = (action: 'up' | 'down') => (): void => {
    switch (action) {
      case 'up':
        this.inputEl.stepUp();
        break;
      case 'down':
        this.inputEl.stepDown();
        break;
    }

    this.valueState = (this.inputEl.value === '' ? this.inputEl.value : +this.inputEl.value);
  };

  render() {
    return (
      <Host>
        <input
          part="input"
          type="number"
          min={this.min}
          max={this.max}
          step={this.step}
          value={this.value}
          readOnly
          onChange={this.inputChangeHandler}
        />

        <div class="buttons" part="buttons">
          <button
            type="button"
            part="button-up"
            disabled={this.disabled || this.readOnly || (this.valueState !== '' && this.valueState >= +this.max)}
            onClick={this.buttonClickHandler('up')}
          />
          <button
            type="button"
            part="button-down"
            disabled={this.disabled || this.readOnly || (this.valueState !== '' && this.valueState <= +this.min)}
            onClick={this.buttonClickHandler('down')}
          />
        </div>
      </Host>
    );
  }
}
