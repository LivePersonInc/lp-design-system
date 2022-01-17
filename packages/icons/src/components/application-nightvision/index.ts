import { customElement } from 'lit/decorators.js';

import Icon from '../Icon';

import ApplicationNightvision from './icons/name=application-nightvision.svg';

@customElement('lp-application-nightvision-icon')
export class ApplicationNightvisionIcon extends Icon {
  icons = ApplicationNightvision;
}

declare global {
  interface HTMLElementTagNameMap {
    "lp-application-nightvision-icon": ApplicationNightvisionIcon,
  }
}
