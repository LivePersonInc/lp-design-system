import { customElement } from 'lit/decorators.js';

import Icon from '../Icon';

import ApplicationUser from './icons/name=application-user.svg';

@customElement('lp-application-user-icon')
export class ApplicationUserIcon extends Icon {
  icons = ApplicationUser;
}

declare global {
  interface HTMLElementTagNameMap {
    "lp-application-user-icon": ApplicationUserIcon,
  }
}
