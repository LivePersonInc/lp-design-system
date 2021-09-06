import { DireflowComponent } from 'direflow-component';

import Minimize2Icon, { Minimize2IconProps } from './Minimize2Icon';

DireflowComponent.create({
  component: Minimize2Icon,
  configuration: {
    tagname: 'lp-minimize-2-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-minimize-2-icon': Minimize2IconProps
    }
  }
}
