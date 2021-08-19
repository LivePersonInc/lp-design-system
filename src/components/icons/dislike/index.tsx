import { DireflowComponent } from 'direflow-component';

import DislikeIcon, { DislikeIconProps } from './DislikeIcon';

DireflowComponent.create({
  component: DislikeIcon,
  configuration: {
    tagname: 'lp-dislike-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-dislike-icon': DislikeIconProps
    }
  }
}
