import { customElement } from 'lit/decorators.js';

import Icon from '../Icon';

import OutlineSmall from './icons/name=filter-2-add&fill=false&size=16.svg';

@customElement('lp-filter-2-add-icon')
export class Filter2AddIcon extends Icon {
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
    "lp-filter-2-add-icon": Filter2AddIcon,
  }
}
