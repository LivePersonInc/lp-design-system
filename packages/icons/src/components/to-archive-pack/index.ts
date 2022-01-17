import { customElement } from 'lit/decorators.js';

import Icon from '../Icon';

import SolidSmall from './icons/name=to-archive-pack&fill=true&size=16.svg';
import SolidMedium from './icons/name=to-archive-pack&fill=true&size=24.svg';
import SolidLarge from './icons/name=to-archive-pack&fill=true&size=32.svg';
import OutlineSmall from './icons/name=to-archive-pack&fill=false&size=16.svg';
import OutlineMedium from './icons/name=to-archive-pack&fill=false&size=24.svg';
import OutlineLarge from './icons/name=to-archive-pack&fill=false&size=32.svg';

@customElement('lp-to-archive-pack-icon')
export class ToArchivePackIcon extends Icon {
  icons = {
    solid: {
      small: SolidSmall,
      medium: SolidMedium,
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
    "lp-to-archive-pack-icon": ToArchivePackIcon,
  }
}
