import { customElement } from 'lit/decorators.js';

import Icon from '../Icon';

import ApplicationBotAccount from './icons/name=application-bot-accounts.svg';

@customElement('lp-application-bot-accounts-icon')
export class ApplicationBotAccountsIcon extends Icon {
  icons = ApplicationBotAccount;
}

declare global {
  interface HTMLElementTagNameMap {
    "lp-application-bot-accounts-icon": ApplicationBotAccountsIcon,
  }
}
