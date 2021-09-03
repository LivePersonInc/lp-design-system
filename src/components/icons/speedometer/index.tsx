import { DireflowComponent } from 'direflow-component';

import SpeedometerIcon, { SpeedometerIconProps } from './SpeedometerIcon';

DireflowComponent.create({
  component: SpeedometerIcon,
  configuration: {
    tagname: 'lp-speedometer-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-speedometer-icon': SpeedometerIconProps
    }
  }
}
