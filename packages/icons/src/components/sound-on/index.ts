import { customElement } from 'lit/decorators.js';

import Icon from '../Icon';

import SolidSmall from './icons/name=sound-on&fill=true&size=16.svg';
import SolidMedium from './icons/name=sound-on&fill=true&size=24.svg';
import SolidLarge from './icons/name=sound-on&fill=true&size=32.svg';
import OutlineSmall from './icons/name=sound-on&fill=false&size=16.svg';
import OutlineMedium from './icons/name=sound-on&fill=false&size=24.svg';
import OutlineLarge from './icons/name=sound-on&fill=false&size=32.svg';

@customElement('lp-sound-on-icon')
export class SoundOnIcon extends Icon {
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
    "lp-sound-on-icon": SoundOnIcon,
  }
}
