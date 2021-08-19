import { DireflowComponent } from 'direflow-component';

import SyncCwIcon, { SyncCwIconProps } from './SyncCwIcon';

DireflowComponent.create({
  component: SyncCwIcon,
  configuration: {
    tagname: 'lp-sync-cw-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-sync-cw-icon': SyncCwIconProps
    }
  }
}
