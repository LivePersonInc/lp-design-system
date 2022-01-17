import { customElement } from 'lit/decorators.js';

import Icon from '../Icon';

import ApplicationCampaign from './icons/name=application-campaign.svg';

@customElement('lp-application-campaign-icon')
export class ApplicationCampaignIcon extends Icon {
  icons = ApplicationCampaign;
}

declare global {
  interface HTMLElementTagNameMap {
    "lp-application-campaign-icon": ApplicationCampaignIcon,
  }
}
