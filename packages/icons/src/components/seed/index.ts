import { customElement } from 'lit/decorators.js';

import Icon from '../Icon';

import OutlineSmall from './icons/name=seed&fill=false&size=16.svg';

@customElement('lp-seed-icon')
export class SeedIcon extends Icon {
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
    "lp-seed-icon": SeedIcon,
  }
}
