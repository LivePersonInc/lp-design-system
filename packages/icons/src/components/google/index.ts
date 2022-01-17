import { customElement } from 'lit/decorators.js';

import Icon from '../Icon';

import OutlineSmall from './icons/name=google&fill=false&size=16.svg';
import OutlineMedium from './icons/name=google&fill=false&size=24.svg';
import OutlineLarge from './icons/name=google&fill=false&size=32.svg';

@customElement('lp-google-icon')
export class GoogleIcon extends Icon {
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
    "lp-google-icon": GoogleIcon,
  }
}
