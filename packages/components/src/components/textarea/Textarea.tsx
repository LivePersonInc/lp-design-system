import { Component, h, Host, Prop, State } from '@stencil/core';

import { Theme } from '../../utils/types';

import '@liveperson-design-system/icons/requested';

export type TextareaTextAligners = 'left' | 'center' | 'right'

@Component({
  tag: 'lp-textarea',
  styleUrl: 'textarea.scss',
  shadow: true,
})
export class Textarea {

  @Prop() theme: Theme;
  @Prop() textAlign: TextareaTextAligners;
  @Prop() error: boolean;
  @Prop({ mutable: true }) value: string = '';
  @Prop() resizable: boolean;
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

        <textarea
          class={{
            'with-icon-left': this.withLeftIcon,
            'with-icon-right': (this.error || this.withRightIcon),
          }}
          part="textarea"
          value={this.value}
          disabled={this.disabled}
          readOnly={this.readOnly}
          onChange={this.inputChangeHandler}
        >
          {this.value}
        </textarea>

        <slot name="icon-right" onSlotchange={this.slotChangeHandler}>
          {this.error && <lp-requested-icon />}
        </slot>
      </Host>
    );
  }
}
