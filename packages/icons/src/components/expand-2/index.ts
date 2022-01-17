import { customElement } from 'lit/decorators.js';

import Icon from '../Icon';

import SolidLarge from './icons/name=expand-2&fill=true&size=32.svg';
import OutlineSmall from './icons/name=expand-2&fill=false&size=16.svg';
import OutlineMedium from './icons/name=expand-2&fill=false&size=24.svg';
import OutlineLarge from './icons/name=expand-2&fill=false&size=32.svg';

@customElement('lp-expand-2-icon')
export class Expand2Icon extends Icon {
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
    "lp-expand-2-icon": Expand2Icon,
  }
}
