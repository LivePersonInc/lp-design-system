import { customElement } from 'lit/decorators.js';

import Icon from '../Icon';

import SolidMedium from './icons/name=phone&fill=true&size=24.svg';
import SolidLarge from './icons/name=phone&fill=true&size=32.svg';
import OutlineSmall from './icons/name=phone&fill=false&size=16.svg';
import OutlineMedium from './icons/name=phone&fill=false&size=24.svg';
import OutlineLarge from './icons/name=phone&fill=false&size=32.svg';

@customElement('lp-phone-icon')
export class PhoneIcon extends Icon {
  icons = {
    solid: {
      small: SolidMedium,
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
    "lp-phone-icon": PhoneIcon,
  }
}
