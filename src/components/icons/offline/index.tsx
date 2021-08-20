import { DireflowComponent } from 'direflow-component';

import OfflineIcon, { OfflineIconProps } from './OfflineIcon';

DireflowComponent.create({
  component: OfflineIcon,
  configuration: {
    tagname: 'lp-offline-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-offline-icon': OfflineIconProps
    }
  }
}
