import { Component, Prop, Event, Element, h, EventEmitter } from '@stencil/core';

import { Theme } from '../../utils/types';
import { SlotElement } from '../../utils/decorators';

export type ButtonGroupSize = 'default' | 'small'

@Component({
  tag: 'lp-button-group',
  styleUrl: 'button-group.scss',
  shadow: true,
})
export class ButtonGroup {

  @Element() hostEl: HTMLElement;

  @SlotElement() slotEl: HTMLSlotElement;

  @Prop() theme?: Theme;
  @Prop() size?: ButtonGroupSize;

  /**
   * Fires when user clicks on any button inside the group
   */
  @Event({ eventName: 'click', composed: true }) buttonClickEvent: EventEmitter;

  componentDidRender() {
    this.slotEl?.assignedElements()?.forEach(button => {
      button.addEventListener('click', this.buttonClickHandler);
    });
  }

  private buttonClickHandler = (e): void => {
    this.slotEl?.assignedElements()
      ?.find(({ classList }) => classList.contains('selected'))
      ?.classList
      .remove('selected');

    (e.target as HTMLButtonElement).classList.add('selected');

    this.buttonClickEvent.emit(e);
  };

  render() {
    return <slot />;
  }
}
