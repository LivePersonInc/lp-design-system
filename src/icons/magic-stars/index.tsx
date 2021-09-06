import { DireflowComponent } from 'direflow-component';

import MagicStarsIcon, { MagicStarsIconProps } from './MagicStarsIcon';

DireflowComponent.create({
  component: MagicStarsIcon,
  configuration: {
    tagname: 'lp-magic-stars-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-magic-stars-icon': MagicStarsIconProps
    }
  }
}
