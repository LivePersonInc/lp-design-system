import { DireflowComponent } from 'direflow-component';

import Threshold1Icon, { Threshold1IconProps } from './Threshold1Icon';

DireflowComponent.create({
  component: Threshold1Icon,
  configuration: {
    tagname: 'lp-threshold-1-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-threshold-1-icon': Threshold1IconProps
    }
  }
}
