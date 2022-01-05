import { Component, Prop, h } from '@stencil/core';

import { Theme } from '../../utils/types';

@Component({
  tag: 'lp-input-helper',
  styleUrl: 'input-helper.scss',
  shadow: true,
})
export class InputHelper {
  @Prop() theme?: Theme;

  /**
   * Can be provided as a child element
   */
  @Prop() text?: string;

  @Prop() error?: boolean;
  @Prop() disabled?: boolean;

  render() {
    return <slot>{this.text}</slot>;
  }
}
