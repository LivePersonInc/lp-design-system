import { DireflowComponent } from 'direflow-component';

import Threshold2Icon, { Threshold2IconProps } from './Threshold2Icon';

DireflowComponent.create({
  component: Threshold2Icon,
  configuration: {
    tagname: 'lp-threshold-2-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-threshold-2-icon': Threshold2IconProps
    }
  }
}
