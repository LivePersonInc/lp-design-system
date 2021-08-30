import { DireflowComponent } from 'direflow-component';

import Expand2Icon, { Expand2IconProps } from './Expand2Icon';

DireflowComponent.create({
  component: Expand2Icon,
  configuration: {
    tagname: 'lp-expand-2-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-expand-2-icon': Expand2IconProps
    }
  }
}
