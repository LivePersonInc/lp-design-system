import { DireflowComponent } from 'direflow-component';

import DotsVertIcon, { DotsVertIconProps } from './DotsVertIcon';

DireflowComponent.create({
  component: DotsVertIcon,
  configuration: {
    tagname: 'lp-dots-vert-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-dots-vert-icon': DotsVertIconProps
    }
  }
}
