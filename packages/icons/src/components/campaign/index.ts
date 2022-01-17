import { customElement } from 'lit/decorators.js';

import Icon from '../Icon';

import SolidSmall from './icons/name=campaign&fill=true&size=16.svg';
import SolidMedium from './icons/name=campaign&fill=true&size=24.svg';
import SolidLarge from './icons/name=campaign&fill=true&size=32.svg';
import OutlineSmall from './icons/name=campaign&fill=false&size=16.svg';
import OutlineMedium from './icons/name=campaign&fill=false&size=24.svg';
import OutlineLarge from './icons/name=campaign&fill=false&size=32.svg';

@customElement('lp-campaign-icon')
export class CampaignIcon extends Icon {
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
    "lp-campaign-icon": CampaignIcon,
  }
}
