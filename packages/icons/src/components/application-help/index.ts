import { customElement } from 'lit/decorators.js';

import Icon from '../Icon';

import ApplicationHelp from './icons/name=application-help.svg';

@customElement('lp-application-help-icon')
export class ApplicationHelpIcon extends Icon {
  icons = ApplicationHelp;
}

declare global {
  interface HTMLElementTagNameMap {
    "lp-application-help-icon": ApplicationHelpIcon,
  }
}
