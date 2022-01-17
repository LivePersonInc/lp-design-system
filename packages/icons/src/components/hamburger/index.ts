import { customElement } from 'lit/decorators.js';

import Icon from '../Icon';

import OutlineSmall from './icons/name=hamburger&fill=false&size=16.svg';
import OutlineMedium from './icons/name=hamburger&fill=false&size=24.svg';
import OutlineLarge from './icons/name=hamburger&fill=false&size=32.svg';

@customElement('lp-hamburger-icon')
export class HamburgerIcon extends Icon {
  icons = {
    solid: {
      small: OutlineSmall,
      medium: OutlineSmall,
      large: OutlineSmall,
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
    "lp-hamburger-icon": HamburgerIcon,
  }
}
