import { customElement } from 'lit/decorators.js';

import Icon from '../Icon';

import SolidLarge from './icons/name=expand-1&fill=true&size=32.svg';
import OutlineSmall from './icons/name=expand-1&fill=false&size=16.svg';
import OutlineMedium from './icons/name=expand-1&fill=false&size=24.svg';
import OutlineLarge from './icons/name=expand-1&fill=false&size=32.svg';

@customElement('lp-expand-1-icon')
export class Expand1Icon extends Icon {
  icons = {
    solid: {
      small: OutlineSmall,
      medium: OutlineMedium,
      large: SolidLarge,
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
    "lp-expand-1-icon": Expand1Icon,
  }
}
