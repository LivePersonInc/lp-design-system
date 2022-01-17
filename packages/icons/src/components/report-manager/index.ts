import { customElement } from 'lit/decorators.js';

import Icon from '../Icon';

import SolidSmall from './icons/name=report-manager&fill=true&size=16.svg';
import SolidMedium from './icons/name=report-manager&fill=true&size=24.svg';
import SolidLarge from './icons/name=report-manager&fill=true&size=32.svg';
import OutlineSmall from './icons/name=report-manager&fill=false&size=16.svg';
import OutlineMedium from './icons/name=report-manager&fill=false&size=24.svg';
import OutlineLarge from './icons/name=report-manager&fill=false&size=32.svg';

@customElement('lp-report-manager-icon')
export class ReportManagerIcon extends Icon {
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
    "lp-report-manager-icon": ReportManagerIcon,
  }
}
