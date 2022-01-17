import { customElement } from 'lit/decorators.js';

import Icon from '../Icon';

import SolidLarge from './icons/name=rotate-ccw&fill=true&size=32.svg';
import OutlineSmall from './icons/name=rotate-ccw&fill=false&size=16.svg';
import OutlineMedium from './icons/name=rotate-ccw&fill=false&size=24.svg';
import OutlineLarge from './icons/name=rotate-ccw&fill=false&size=32.svg';

@customElement('lp-rotate-ccw-icon')
export class RotateCcwIcon extends Icon {
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
    "lp-rotate-ccw-icon": RotateCcwIcon,
  }
}
