import { DireflowComponent } from 'direflow-component';

import ArrowUpDoubleCircleIcon, { ArrowUpDoubleCircleIconProps } from './ArrowUpDoubleCircleIcon';

DireflowComponent.create({
  component: ArrowUpDoubleCircleIcon,
  configuration: {
    tagname: 'lp-arrow-up-double-circle-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-arrow-up-double-circle-icon': ArrowUpDoubleCircleIconProps
    }
  }
}
