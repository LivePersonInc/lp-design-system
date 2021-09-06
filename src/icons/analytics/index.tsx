import { DireflowComponent } from 'direflow-component';

import AnalyticsIcon, { AnalyticsIconProps } from './AnalyticsIcon';

DireflowComponent.create({
  component: AnalyticsIcon,
  configuration: {
    tagname: 'lp-analytics-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-analytics-icon': AnalyticsIconProps
    }
  }
}
