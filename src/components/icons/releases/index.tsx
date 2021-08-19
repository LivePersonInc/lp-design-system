import { DireflowComponent } from 'direflow-component';

import ReleasesIcon, { ReleasesIconProps } from './ReleasesIcon';

DireflowComponent.create({
  component: ReleasesIcon,
  configuration: {
    tagname: 'lp-releases-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-releases-icon': ReleasesIconProps
    }
  }
}
