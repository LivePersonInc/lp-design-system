import { customElement } from 'lit/decorators.js';

import Icon from '../Icon';

import SolidLarge from './icons/name=minimize-1&fill=true&size=32.svg';
import OutlineSmall from './icons/name=minimize-1&fill=false&size=16.svg';
import OutlineMedium from './icons/name=minimize-1&fill=false&size=24.svg';
import OutlineLarge from './icons/name=minimize-1&fill=false&size=32.svg';

@customElement('lp-minimize-1-icon')
export class Minimize1Icon extends Icon {
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
    "lp-minimize-1-icon": Minimize1Icon,
  }
}
