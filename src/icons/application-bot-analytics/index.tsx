import { DireflowComponent } from 'direflow-component';

import ApplicationBotAnalyticsIcon, { ApplicationBotAnalyticsIconProps } from './ApplicationBotAnalyticsIcon';

DireflowComponent.create({
  component: ApplicationBotAnalyticsIcon,
  configuration: {
    tagname: 'lp-application-bot-analytics-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-application-bot-analytics-icon': ApplicationBotAnalyticsIconProps
    }
  }
}
