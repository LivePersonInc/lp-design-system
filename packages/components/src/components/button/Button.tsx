import { Component, Prop, h, Host } from '@stencil/core';

import { Theme } from '../../utils/types';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'destructive' | 'inline'

export type ButtonSize = 'small' | 'medium' | 'large'

@Component({
  tag: 'lp-button',
  styleUrl: 'button.scss',
  shadow: true,
})
export class Button {

  @Prop() theme: Theme;
  @Prop() variant: ButtonVariant;
  @Prop() size: ButtonSize;

  /**
   * Can be provided as a child element
   */
  @Prop() label: string;

  render() {
    return (
      <Host tabindex="0">
        <slot name="icon-left" />

        <slot>{this.label}</slot>

        <slot name="icon-right" />
      </Host>
    );
  }
}
