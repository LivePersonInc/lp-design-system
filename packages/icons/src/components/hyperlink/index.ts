import { customElement } from 'lit/decorators.js';

import Icon from '../Icon';

import SolidLarge from './icons/name=hyperlink&fill=true&size=32.svg';
import OutlineSmall from './icons/name=hyperlink&fill=false&size=16.svg';
import OutlineMedium from './icons/name=hyperlink&fill=false&size=24.svg';
import OutlineLarge from './icons/name=hyperlink&fill=false&size=32.svg';

@customElement('lp-hyperlink-icon')
export class HyperlinkIcon extends Icon {
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
    "lp-hyperlink-icon": HyperlinkIcon,
  }
}
