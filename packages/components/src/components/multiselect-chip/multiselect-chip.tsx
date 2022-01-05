import { Component, Prop, h } from '@stencil/core';

import { Theme } from '../../utils/types';

import { ChipSize } from './chip';

@Component({
  tag: 'lp-multiselect-chip',
  styleUrl: 'multiselect-chip.scss',
  shadow: true,
})
export class MultiselectChip {
  @Prop({ reflect: true }) theme: Theme;
  @Prop({ reflect: true }) size: ChipSize;

  render() {
    return <slot />;
  }
}
