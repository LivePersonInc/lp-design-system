import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';

import { Theme } from '../../utils/types';

export type RadioSizes = 'default' | 'large'
export type RadioLabelPositions = 'left' | 'right'

export type RadioProps = {
  theme?: Theme

  name: string
  value: string

  size?: RadioSizes

  /**
   * Can be provided as a child element
   */
  label?: string

  labelPosition?: RadioLabelPositions
  error?: boolean
  checked?: boolean
  disabled?: boolean
  readOnly?: boolean
}

@Component({
  tag: 'lp-radio',
  styleUrl: 'radio.scss',
  shadow: true,
})
export class Radio {
  static defaultProps: Partial<RadioProps> = {
    theme: 'dark',
    size: 'default',
    labelPosition: 'right',
    error: false,
    checked: false,
    disabled: false,
    readOnly: false,
  };

  @Prop() theme: Theme;

  @Prop({ reflect: true }) name!: string;
  @Prop({ reflect: true }) value!: string;

  @Prop() size: RadioSizes;

  /**
   * Can be provided as a child element
   */
  @Prop() label: string;

  @Prop() labelPosition: RadioLabelPositions;
  @Prop() error: boolean;
  @Prop() checked: boolean;
  @Prop() disabled: boolean;
  @Prop() readOnly: boolean;

  @Event({ eventName: 'change' }) changeEvent: EventEmitter;

  private inputChangeHandler = (): void => {
    this.changeEvent.emit();
  };

  render() {
    return (
      <label>
        <input
          type="radio"
          name={this.name}
          value={this.value}
          checked={this.checked}
          onChange={this.inputChangeHandler}
        />

        <div class="label">
          <div class="check-box" />

          <slot>{this.label}</slot>
        </div>
      </label>
    );
  }
}
