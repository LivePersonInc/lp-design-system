import { DireflowComponent } from 'direflow-component';

import SyncCcwIcon, { SyncCcwIconProps } from './SyncCcwIcon';

DireflowComponent.create({
  component: SyncCcwIcon,
  configuration: {
    tagname: 'lp-sync-ccw-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-sync-ccw-icon': SyncCcwIconProps
    }
  }
}
