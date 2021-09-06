import { DireflowComponent } from 'direflow-component';

import ChartBubbleIcon, { ChartBubbleIconProps } from './ChartBubbleIcon';

DireflowComponent.create({
  component: ChartBubbleIcon,
  configuration: {
    tagname: 'lp-chart-bubble-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-chart-bubble-icon': ChartBubbleIconProps
    }
  }
}
