import { customElement } from 'lit/decorators.js';

import Icon from '../Icon';

import SolidLarge from './icons/name=go-to-edge-right&fill=true&size=32.svg';
import OutlineSmall from './icons/name=go-to-edge-right&fill=false&size=16.svg';
import OutlineMedium from './icons/name=go-to-edge-right&fill=false&size=24.svg';
import OutlineLarge from './icons/name=go-to-edge-right&fill=false&size=32.svg';

@customElement('lp-go-to-edge-right-icon')
export class GoToEdgeRightIcon extends Icon {
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
    "lp-go-to-edge-right-icon": GoToEdgeRightIcon,
  }
}
