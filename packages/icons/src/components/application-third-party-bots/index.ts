import { customElement } from 'lit/decorators.js';

import Icon from '../Icon';

import ApplicationThirdPartyBots from './icons/name=application-third-party-bots.svg';

@customElement('lp-application-third-party-bots-icon')
export class ApplicationThirdPartyBotsIcon extends Icon {
  icons = ApplicationThirdPartyBots;
}

declare global {
  interface HTMLElementTagNameMap {
    "lp-application-third-party-bots-icon": ApplicationThirdPartyBotsIcon,
  }
}
