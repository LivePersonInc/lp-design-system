import { DireflowComponent } from 'direflow-component';

import ChartPieIcon, { ChartPieIconProps } from './ChartPieIcon';

DireflowComponent.create({
  component: ChartPieIcon,
  configuration: {
    tagname: 'lp-chart-pie-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-chart-pie-icon': ChartPieIconProps
    }
  }
}
