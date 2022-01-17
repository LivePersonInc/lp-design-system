import { customElement } from 'lit/decorators.js';

import Icon from '../Icon';

import ApplicationAutomation from './icons/name=application-automation.svg';

@customElement('lp-application-automation-icon')
export class ApplicationAutomationIcon extends Icon {
  icons = ApplicationAutomation;
}

declare global {
  interface HTMLElementTagNameMap {
    "lp-application-automation-icon": ApplicationAutomationIcon,
  }
}
