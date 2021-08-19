import { DireflowComponent } from 'direflow-component';

import ArrowDownIcon, { ArrowDownIconProps } from './ArrowDownIcon';

DireflowComponent.create({
  component: ArrowDownIcon,
  configuration: {
    tagname: 'lp-arrow-down-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-arrow-down-icon': ArrowDownIconProps
    }
  }
}
