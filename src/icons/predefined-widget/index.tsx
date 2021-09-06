import { DireflowComponent } from 'direflow-component';

import PredefinedWidgetIcon, { PredefinedWidgetIconProps } from './PredefinedWidgetIcon';

DireflowComponent.create({
  component: PredefinedWidgetIcon,
  configuration: {
    tagname: 'lp-predefined-widget-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-predefined-widget-icon': PredefinedWidgetIconProps
    }
  }
}
