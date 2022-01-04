import { Component, Prop, h, Event, EventEmitter, Host } from '@stencil/core';

import { Theme } from '../../utils/types';

export type ChipSize = 'default' | 'small'

@Component({
  tag: 'lp-chip',
  styleUrl: 'chip.scss',
  shadow: true,
})
export class Chip {
  @Prop({ reflect: true }) theme: Theme;
  @Prop({ reflect: true }) size: ChipSize;

  /**
   * Can be provided as a child
   */
  @Prop() label: string | number;

  @Prop() value: string;

  @Event({ eventName: 'remove', composed: true, cancelable: true, bubbles: true }) removeEvent: EventEmitter;

  private buttonRemoveClickHandler = (e): void => {
    e.preventDefault();

    this.removeEvent.emit();
  }

  render() {
    return (
      <Host>
        <button type="button" onClick={this.buttonRemoveClickHandler}>
          <lp-close-small-icon />
        </button>

        <slot>{this.label}</slot>
      </Host>
    );
  }
}
