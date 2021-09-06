import { DireflowComponent } from 'direflow-component';

import StarIcon, { StarIconProps } from './StarIcon';

DireflowComponent.create({
  component: StarIcon,
  configuration: {
    tagname: 'lp-star-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-star-icon': StarIconProps
    }
  }
}
