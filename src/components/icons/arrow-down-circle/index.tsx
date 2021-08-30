import { DireflowComponent } from 'direflow-component';

import ArrowDownCircleIcon, { ArrowDownCircleIconProps } from './ArrowDownCircleIcon';

DireflowComponent.create({
  component: ArrowDownCircleIcon,
  configuration: {
    tagname: 'lp-arrow-down-circle-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-arrow-down-circle-icon': ArrowDownCircleIconProps
    }
  }
}
