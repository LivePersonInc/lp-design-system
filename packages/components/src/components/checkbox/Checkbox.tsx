import { Component, Prop, h, Event, EventEmitter, Watch, Element } from '@stencil/core';

import { Theme } from '../../utils/types';
import { Query } from '../../utils/decorators';

export type CheckboxLabelPositions = 'left' | 'right'

@Component({
  tag: 'lp-checkbox',
  styleUrl: 'checkbox.scss',
  shadow: true,
})
export class Checkbox {

  @Element() hostEl: HTMLElement;

  @Query('input') inputEl: HTMLInputElement;

  @Prop() theme: Theme;

  /**
   * Can be provided as a child element
   */
  @Prop() label: string;

  @Prop() labelPosition: CheckboxLabelPositions;
  @Prop() error: boolean;

  @Prop({ mutable: true }) checked: boolean;
  @Prop({ mutable: true }) indeterminate: boolean;

  @Watch('indeterminate')
  indeterminatePropChangeHandler(newValue: boolean) {
    this.inputEl.indeterminate = newValue;
  }

  @Event({ eventName: 'change', composed: true }) changeEvent?: EventEmitter;

  private checkboxChangeHandler = (e): void => {
    this.checked = e.target.checked;

    this.changeEvent.emit();
  };

  render() {
    return (
      <label>
        <input type="checkbox" value="1" checked={this.checked} onChange={this.checkboxChangeHandler} />

        <div id="label">
          <svg id="check-box">
            <path d={this.indeterminate ? 'M5 8H11' : 'M5 8.15805L7.28781 10.3821L11 6'} />
          </svg>

          <slot>{this.label}</slot>
        </div>
      </label>
    );
  }
}
