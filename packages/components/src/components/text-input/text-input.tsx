import { Component, h, Host, Prop, State } from '@stencil/core';

import { Theme } from '../../utils/types';

import '@liveperson-design-system/icons/dist/requested';

export type TextInputSizes = 'large' | 'medium'
export type TextInputTextAligners = 'left' | 'center' | 'right'

@Component({
  tag: 'lp-text-input',
  styleUrl: 'text-input.scss',
  shadow: true,
})
export class TextInput {

  @Prop() theme: Theme;
  @Prop() size: TextInputSizes;
  @Prop() textAlign: TextInputTextAligners;
  @Prop() error: boolean;
  @Prop({ mutable: true }) value: string = '';
  @Prop() disabled: boolean;
  @Prop({ attribute: 'readOnly' }) readOnly: boolean;

  @State() withLeftIcon: boolean = false;
  @State() withRightIcon: boolean = false;

  private slotChangeHandler = (e): void => {
    this[(e.target.name === 'icon-left' ? 'withLeftIcon' : 'withRightIcon')] = !!e.target.assignedNodes().length;
  };

  private inputChangeHandler = (e): void => {
    this.value = (e.target as HTMLInputElement).value;
  };

  render() {
    return (
      <Host>
        <slot name="icon-left" onSlotchange={this.slotChangeHandler} />

        <input
          class={{
            'with-icon-left': this.withLeftIcon,
            'with-icon-right': (this.error || this.withRightIcon),
          }}
          part="input"
          type="text"
          value={this.value}
          disabled={this.disabled}
          readOnly={this.readOnly}
          onChange={this.inputChangeHandler}
        />

        <slot name="icon-right" onSlotchange={this.slotChangeHandler}>
          {this.error && <lp-requested-icon />}
        </slot>
      </Host>
    );
  }
}
