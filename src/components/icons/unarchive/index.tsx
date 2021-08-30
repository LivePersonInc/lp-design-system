import { DireflowComponent } from 'direflow-component';

import UnarchiveIcon, { UnarchiveIconProps } from './UnarchiveIcon';

DireflowComponent.create({
  component: UnarchiveIcon,
  configuration: {
    tagname: 'lp-unarchive-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-unarchive-icon': UnarchiveIconProps
    }
  }
}
