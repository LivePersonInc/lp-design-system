import { DireflowComponent } from 'direflow-component';

import ChartBarIcon, { ChartBarIconProps } from './ChartBarIcon';

DireflowComponent.create({
  component: ChartBarIcon,
  configuration: {
    tagname: 'lp-chart-bar-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-chart-bar-icon': ChartBarIconProps
    }
  }
}
