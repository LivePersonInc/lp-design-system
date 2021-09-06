import { DireflowComponent } from 'direflow-component';

import CalendarIcon, { CalendarIconProps } from './CalendarIcon';

DireflowComponent.create({
  component: CalendarIcon,
  configuration: {
    tagname: 'lp-calendar-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-calendar-icon': CalendarIconProps
    }
  }
}
