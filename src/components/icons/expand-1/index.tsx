import { DireflowComponent } from 'direflow-component';

import Expand1Icon, { Expand1IconProps } from './Expand1Icon';

DireflowComponent.create({
  component: Expand1Icon,
  configuration: {
    tagname: 'lp-expand-1-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-expand-1-icon': Expand1IconProps
    }
  }
}
