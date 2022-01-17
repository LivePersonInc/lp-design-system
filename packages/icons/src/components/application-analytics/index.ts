import { customElement } from 'lit/decorators.js';

import Icon from '../Icon';

import ApplicationAnalytics from './icons/name=application-analytics.svg';

@customElement('lp-application-analytics-icon')
export class ApplicationAnalyticsIcon extends Icon {
  icons = ApplicationAnalytics;
}

declare global {
  interface HTMLElementTagNameMap {
    "lp-application-analytics-icon": ApplicationAnalyticsIcon,
  }
}
