import { DireflowComponent } from 'direflow-component';

import CreateContentIcon, { CreateContentIconProps } from './CreateContentIcon';

DireflowComponent.create({
  component: CreateContentIcon,
  configuration: {
    tagname: 'lp-create-content-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-create-content-icon': CreateContentIconProps
    }
  }
}
