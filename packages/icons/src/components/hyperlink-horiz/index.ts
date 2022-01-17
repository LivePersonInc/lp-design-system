import { customElement } from 'lit/decorators.js';

import Icon from '../Icon';

import SolidLarge from './icons/name=hyperlink-horiz&fill=true&size=32.svg';
import OutlineSmall from './icons/name=hyperlink-horiz&fill=false&size=16.svg';
import OutlineMedium from './icons/name=hyperlink-horiz&fill=false&size=24.svg';
import OutlineLarge from './icons/name=hyperlink-horiz&fill=false&size=32.svg';

@customElement('lp-hyperlink-horiz-icon')
export class HyperlinkHorizIcon extends Icon {
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
    "lp-hyperlink-horiz-icon": HyperlinkHorizIcon,
  }
}
