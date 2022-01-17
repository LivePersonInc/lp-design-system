import { customElement } from 'lit/decorators.js';

import Icon from '../Icon';

import SolidLarge from './icons/name=rotate-cw&fill=true&size=32.svg';
import OutlineSmall from './icons/name=rotate-cw&fill=false&size=16.svg';
import OutlineMedium from './icons/name=rotate-cw&fill=false&size=24.svg';
import OutlineLarge from './icons/name=rotate-cw&fill=false&size=32.svg';

@customElement('lp-rotate-cw-icon')
export class RotateCwIcon extends Icon {
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
    "lp-rotate-cw-icon": RotateCwIcon,
  }
}
