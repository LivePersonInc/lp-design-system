import { DireflowComponent } from 'direflow-component';

import PlusCircleIcon, { PlusCircleIconProps } from './PlusCircleIcon';

DireflowComponent.create({
  component: PlusCircleIcon,
  configuration: {
    tagname: 'lp-plus-circle-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-plus-circle-icon': PlusCircleIconProps
    }
  }
}
