import { DireflowComponent } from 'direflow-component';

import ApplicationAnalyticsIcon, { ApplicationAnalyticsIconProps } from './ApplicationAnalyticsIcon';

DireflowComponent.create({
  component: ApplicationAnalyticsIcon,
  configuration: {
    tagname: 'lp-application-analytics-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-application-analytics-icon': ApplicationAnalyticsIconProps
    }
  }
}
