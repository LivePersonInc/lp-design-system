import { customElement } from 'lit/decorators.js';

import Icon from '../Icon';

import ApplicationBotStatus from './icons/name=application-bot-status.svg';

@customElement('lp-application-bot-status-icon')
export class ApplicationBotStatusIcon extends Icon {
  icons = ApplicationBotStatus;
}

declare global {
  interface HTMLElementTagNameMap {
    "lp-application-bot-status-icon": ApplicationBotStatusIcon,
  }
}
