import { Component, h, Prop } from '@stencil/core';

import { Theme } from '../../utils/types';

export type ToggleLabelPositions = 'left' | 'right'

@Component({
  tag: 'lp-toggle',
  styleUrl: 'toggle.scss',
  shadow: true,
})
export class Toggle {
  @Prop() theme: Theme;

  /**
   * Can be provided as a child element
   */
  @Prop() label: string;

  @Prop() labelPosition: ToggleLabelPositions;
  @Prop({ attribute: 'a11y' }) a11y: boolean;
  @Prop({ mutable: true }) checked: boolean;
  @Prop() disabled: boolean;
  @Prop({ attribute: 'readOnly' }) readOnly: boolean;

  private toggleChangeHandler = (e): void => {
    this.checked = e.target.checked;
  };

  render() {
    return (
      <label>
        <input
          type="checkbox"
          checked={this.checked}
          disabled={this.disabled}
          readOnly={this.readOnly}
          onChange={this.toggleChangeHandler}
        />

        <div id="label">
          <div id="slider">
            {this.a11y && [<span />, <span />]}
          </div>

          <slot>{this.label}</slot>
        </div>
      </label>
    );
  }
}
