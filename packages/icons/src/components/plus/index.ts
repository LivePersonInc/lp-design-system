import { customElement } from 'lit/decorators.js';

import Icon from '../Icon';

import OutlineSmall from './icons/name=plus&fill=false&size=16.svg';
import OutlineMedium from './icons/name=plus&fill=false&size=24.svg';
import OutlineLarge from './icons/name=plus&fill=false&size=32.svg';

@customElement('lp-plus-icon')
export class PlusIcon extends Icon {
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
    "lp-plus-icon": PlusIcon,
  }
}
