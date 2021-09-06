import { DireflowComponent } from 'direflow-component';

import ArrowUpDoubleIcon, { ArrowUpDoubleIconProps } from './ArrowUpDoubleIcon';

DireflowComponent.create({
  component: ArrowUpDoubleIcon,
  configuration: {
    tagname: 'lp-arrow-up-double-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-arrow-up-double-icon': ArrowUpDoubleIconProps
    }
  }
}
