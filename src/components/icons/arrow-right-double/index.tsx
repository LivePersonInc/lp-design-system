import { DireflowComponent } from 'direflow-component';

import ArrowRightDoubleIcon, { ArrowRightDoubleIconProps } from './ArrowRightDoubleIcon';

DireflowComponent.create({
  component: ArrowRightDoubleIcon,
  configuration: {
    tagname: 'lp-arrow-right-double-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-arrow-right-double-icon': ArrowRightDoubleIconProps
    }
  }
}
