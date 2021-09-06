import { DireflowComponent } from 'direflow-component';

import PercentageIcon, { PercentageIconProps } from './PercentageIcon';

DireflowComponent.create({
  component: PercentageIcon,
  configuration: {
    tagname: 'lp-percentage-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-percentage-icon': PercentageIconProps
    }
  }
}
