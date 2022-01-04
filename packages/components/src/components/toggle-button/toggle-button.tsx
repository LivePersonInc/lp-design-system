import { Component, h, Host, Prop, Element } from '@stencil/core';

import { Theme } from '../../utils/types';

export type ToggleButtonSize = 'default' | 'small'

@Component({
  tag: 'lp-toggle-button',
  styleUrl: 'toggle-button.scss',
  shadow: true,
})
export class ToggleButton {

  @Element() hostEl: HTMLElement;

  @Prop() theme: Theme;
  @Prop() size: ToggleButtonSize;

  /**
   * Can be provided as a child element
   */
  @Prop() label: string;

  @Prop({ mutable: true }) checked: boolean;

  componentDidLoad() {
    this.hostEl.addEventListener('click', this.hostElClickHandler);
  }

  private hostElClickHandler = (): void => {
    this.checked = !this.checked;
  };

  render() {
    return (
      <Host tabindex="0" class={{ checked: this.checked }}>
        <slot name="icon-left" />

        <slot>{this.label}</slot>

        <slot name="icon-right" />
      </Host>
    );
  }
}
