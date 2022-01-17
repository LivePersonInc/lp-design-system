import { customElement } from 'lit/decorators.js';

import Icon from '../Icon';

import SolidSmall from './icons/name=folder-starred&fill=true&size=16.svg';

@customElement('lp-folder-starred-icon')
export class FolderStarredIcon extends Icon {
  icons = {
    solid: {
      small: SolidSmall,
      medium: SolidSmall,
      large: SolidSmall,
    },
    outline: {
      small: SolidSmall,
      medium: SolidSmall,
      large: SolidSmall,
    },
  };
}

declare global {
  interface HTMLElementTagNameMap {
    "lp-folder-starred-icon": FolderStarredIcon,
  }
}
