import { DireflowComponent } from 'direflow-component';

import AppStoreIcon, { AppStoreIconProps } from './AppStoreIcon';

DireflowComponent.create({
  component: AppStoreIcon,
  configuration: {
    tagname: 'lp-app-store-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-app-store-icon': AppStoreIconProps
    }
  }
}
