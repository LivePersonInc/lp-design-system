import { Component, Host, Prop, h } from '@stencil/core';

import { Theme } from '../../utils/types';

import '@liveperson-design-system/icons/info-circle';

@Component({
  tag: 'lp-input-label',
  styleUrl: 'input-label.scss',
  shadow: true,
})
export class InputLabel {
  @Prop() theme?: Theme;
  @Prop() info?: string; // TODO: Finish this functionality after Tooltip component will be finish

  /**
   * Can be provided as a child element
   */
  @Prop() label?: string;

  render() {
    return (
      <Host>
        <slot>{this.label}</slot>

        {!!this.info && <lp-info-circle-icon class="additional-info-icon" type="outline" part="icon" />}
      </Host>
    );
  }
}
