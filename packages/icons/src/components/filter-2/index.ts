import { customElement } from 'lit/decorators.js';

import Icon from '../Icon';

import OutlineSmall from './icons/name=filter-2&fill=false&size=16.svg';
import OutlineMedium from './icons/name=filter-2&fill=false&size=24.svg';
import OutlineLarge from './icons/name=filter-2&fill=false&size=32.svg';

@customElement('lp-filter-2-icon')
export class Filter2Icon extends Icon {
  icons = {
    solid: {
      small: OutlineSmall,
      medium: OutlineMedium,
      large: OutlineLarge,
    },
    outline: {
      small: OutlineSmall,
      medium: OutlineMedium,
      large: OutlineLarge,
    },
  };
}

declare global {
  interface HTMLElementTagNameMap {
    "lp-filter-2-icon": Filter2Icon,
  }
}
