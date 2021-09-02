import { DireflowComponent } from 'direflow-component';

import InProgressIcon, { InProgressIconProps } from './InProgressIcon';

DireflowComponent.create({
  component: InProgressIcon,
  configuration: {
    tagname: 'lp-in-progress-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-in-progress-icon': InProgressIconProps
    }
  }
}
