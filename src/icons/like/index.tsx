import { DireflowComponent } from 'direflow-component';

import LikeIcon, { LikeIconProps } from './LikeIcon';

DireflowComponent.create({
  component: LikeIcon,
  configuration: {
    tagname: 'lp-like-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-like-icon': LikeIconProps
    }
  }
}
