import { DireflowComponent } from 'direflow-component';

import PlusIcon, { PlusIconProps } from './PlusIcon';

DireflowComponent.create({
  component: PlusIcon,
  configuration: {
    tagname: 'lp-plus-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-plus-icon': PlusIconProps
    }
  }
}
