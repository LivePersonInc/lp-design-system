import { DireflowComponent } from 'direflow-component';

import ArrowRightDoubleCircleIcon, { ArrowRightDoubleCircleIconProps } from './ArrowRightDoubleCircleIcon';

DireflowComponent.create({
  component: ArrowRightDoubleCircleIcon,
  configuration: {
    tagname: 'lp-arrow-right-double-circle-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-arrow-right-double-circle-icon': ArrowRightDoubleCircleIconProps
    }
  }
}
