import { customElement } from 'lit/decorators.js';

import Icon from '../Icon';

import SolidLarge from './icons/name=subdirectory&fill=true&size=32.svg';
import OutlineSmall from './icons/name=subdirectory&fill=false&size=16.svg';
import OutlineMedium from './icons/name=subdirectory&fill=false&size=24.svg';
import OutlineLarge from './icons/name=subdirectory&fill=false&size=32.svg';

@customElement('lp-subdirectory-icon')
export class SubdirectoryIcon extends Icon {
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
    "lp-subdirectory-icon": SubdirectoryIcon,
  }
}
