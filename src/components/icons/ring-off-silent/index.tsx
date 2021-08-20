import { DireflowComponent } from 'direflow-component';

import RingOffSilentIcon, { RingOffSilentIconProps } from './RingOffSilentIcon';

DireflowComponent.create({
  component: RingOffSilentIcon,
  configuration: {
    tagname: 'lp-ring-off-silent-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-ring-off-silent-icon': RingOffSilentIconProps
    }
  }
}
