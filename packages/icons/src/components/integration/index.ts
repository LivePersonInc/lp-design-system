import { customElement } from 'lit/decorators.js';

import Icon from '../Icon';

import SolidSmall from './icons/name=integration&fill=true&size=16.svg';
import SolidMedium from './icons/name=integration&fill=true&size=24.svg';
import SolidLarge from './icons/name=integration&fill=true&size=32.svg';
import OutlineSmall from './icons/name=integration&fill=false&size=16.svg';
import OutlineMedium from './icons/name=integration&fill=false&size=24.svg';
import OutlineLarge from './icons/name=integration&fill=false&size=32.svg';

@customElement('lp-integration-icon')
export class IntegrationIcon extends Icon {
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
    "lp-integration-icon": IntegrationIcon,
  }
}
