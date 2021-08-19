import { DireflowComponent } from 'direflow-component';

import SeedIcon, { SeedIconProps } from './SeedIcon';

DireflowComponent.create({
  component: SeedIcon,
  configuration: {
    tagname: 'lp-seed-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-seed-icon': SeedIconProps
    }
  }
}
