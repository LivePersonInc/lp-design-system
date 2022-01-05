import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'lp-select-option',
  styleUrl: 'select-option.scss',
  shadow: true,
})
export class SelectOption {

  /**
   * Can be provided as a child element
   */
  @Prop() label: string;

  @Prop() value!: string;
  @Prop({ reflect: true }) selected: boolean;
  @Prop({ reflect: true }) hidden: boolean;

  render() {
    return (
      <Host tabindex="0">
        <slot>{this.label}</slot>
      </Host>
    );
  }
}
