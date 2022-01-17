import { customElement } from 'lit/decorators.js';

import Icon from '../Icon';

import OutlineSmall from './icons/name=quick&fill=false&size=16.svg';

@customElement('lp-quick-icon')
export class QuickIcon extends Icon {
  icons = {
    solid: {
      small: OutlineSmall,
      medium: OutlineSmall,
      large: OutlineSmall,
    },
    outline: {
      small: OutlineSmall,
      medium: OutlineSmall,
      large: OutlineSmall,
    },
  };
}

declare global {
  interface HTMLElementTagNameMap {
    "lp-quick-icon": QuickIcon,
  }
}
