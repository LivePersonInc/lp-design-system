import { DireflowComponent } from 'direflow-component';

import BrainIcon, { BrainIconProps } from './BrainIcon';

DireflowComponent.create({
  component: BrainIcon,
  configuration: {
    tagname: 'lp-brain-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-brain-icon': BrainIconProps
    }
  }
}
