import { customElement } from 'lit/decorators.js';

import Icon from '../Icon';

import OutlineSmall from './icons/name=filter-1&fill=false&size=16.svg';

@customElement('lp-filter-1-icon')
export class Filter1Icon extends Icon {
  icons = {
    solid: {
      small: OutlineSmall,
      medium: OutlineSmall,
      large: OutlineSmall,
    },
    outline: {
      small: OutlineSmall,
      medium: OutlineSmall,
      large: OutlineSmall,
    },
  };
}

declare global {
  interface HTMLElementTagNameMap {
    "lp-filter-1-icon": Filter1Icon,
  }
}
