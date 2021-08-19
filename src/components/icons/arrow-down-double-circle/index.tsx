import { DireflowComponent } from 'direflow-component';

import ArrowDownDoubleCircleIcon, { ArrowDownDoubleCircleIconProps } from './ArrowDownDoubleCircleIcon';

DireflowComponent.create({
  component: ArrowDownDoubleCircleIcon,
  configuration: {
    tagname: 'lp-arrow-down-double-circle-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-arrow-down-double-circle-icon': ArrowDownDoubleCircleIconProps
    }
  }
}
