import { customElement } from 'lit/decorators.js';

import Icon from '../Icon';

import OutlineSmall from './icons/name=train&fill=false&size=16.svg';

@customElement('lp-train-icon')
export class TrainIcon extends Icon {
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
    "lp-train-icon": TrainIcon,
  }
}
