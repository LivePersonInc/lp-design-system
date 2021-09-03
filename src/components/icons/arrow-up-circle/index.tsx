import { DireflowComponent } from 'direflow-component';

import ArrowUpCircleIcon, { ArrowUpCircleIconProps } from './ArrowUpCircleIcon';

DireflowComponent.create({
  component: ArrowUpCircleIcon,
  configuration: {
    tagname: 'lp-arrow-up-circle-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-arrow-up-circle-icon': ArrowUpCircleIconProps
    }
  }
}
