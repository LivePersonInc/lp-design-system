import { DireflowComponent } from 'direflow-component';

import ArrowUpDownIcon, { ArrowUpDownIconProps } from './ArrowUpDownIcon';

DireflowComponent.create({
  component: ArrowUpDownIcon,
  configuration: {
    tagname: 'lp-arrow-up-down-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-arrow-up-down-icon': ArrowUpDownIconProps
    }
  }
}
