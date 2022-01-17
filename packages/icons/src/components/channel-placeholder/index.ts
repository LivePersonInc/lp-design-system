import { customElement } from 'lit/decorators.js';

import Icon from '../Icon';

import SolidMedium from './icons/name=channel-placeholder&fill=true&size=24.svg';
import SolidLarge from './icons/name=channel-placeholder&fill=true&size=32.svg';
import OutlineSmall from './icons/name=channel-placeholder&fill=false&size=16.svg';
import OutlineMedium from './icons/name=channel-placeholder&fill=false&size=24.svg';
import OutlineLarge from './icons/name=channel-placeholder&fill=false&size=32.svg';

@customElement('lp-channel-placeholder-icon')
export class ChannelPlaceholderIcon extends Icon {
  icons = {
    solid: {
      small: OutlineSmall,
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
    "lp-channel-placeholder-icon": ChannelPlaceholderIcon,
  }
}
