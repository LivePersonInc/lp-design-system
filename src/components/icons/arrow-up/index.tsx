import { DireflowComponent } from 'direflow-component';

import ArrowUpIcon, { ArrowUpIconProps } from './ArrowUpIcon';

DireflowComponent.create({
  component: ArrowUpIcon,
  configuration: {
    tagname: 'lp-arrow-up-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-arrow-up-icon': ArrowUpIconProps
    }
  }
}
