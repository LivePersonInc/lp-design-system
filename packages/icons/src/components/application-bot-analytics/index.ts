import { customElement } from 'lit/decorators.js';

import Icon from '../Icon';

import ApplicationBotAnalytics from './icons/name=application-bot-analytics.svg';

@customElement('lp-application-bot-analytics-icon')
export class ApplicationBotAnalyticsIcon extends Icon {
  icons = ApplicationBotAnalytics;
}

declare global {
  interface HTMLElementTagNameMap {
    "lp-application-bot-analytics-icon": ApplicationBotAnalyticsIcon,
  }
}
