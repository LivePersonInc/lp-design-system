import { customElement } from 'lit/decorators.js';

import Icon from '../Icon';

import SolidSmall from './icons/name=authorized&fill=true&size=16.svg';
import SolidMedium from './icons/name=authorized&fill=true&size=24.svg';
import SolidLarge from './icons/name=authorized&fill=true&size=32.svg';
import OutlineSmall from './icons/name=authorized&fill=false&size=16.svg';
import OutlineMedium from './icons/name=authorized&fill=false&size=24.svg';
import OutlineLarge from './icons/name=authorized&fill=false&size=32.svg';

@customElement('lp-authorized-icon')
export class AuthorizedIcon extends Icon {
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
    "lp-authorized-icon": AuthorizedIcon,
  }
}
