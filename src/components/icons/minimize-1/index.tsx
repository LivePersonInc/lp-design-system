import { DireflowComponent } from 'direflow-component';

import Minimize1Icon, { Minimize1IconProps } from './Minimize1Icon';

DireflowComponent.create({
  component: Minimize1Icon,
  configuration: {
    tagname: 'lp-minimize-1-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-minimize-1-icon': Minimize1IconProps
    }
  }
}
