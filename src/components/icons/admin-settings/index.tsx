import { DireflowComponent } from 'direflow-component';

import AdminSettingsIcon, { AdminSettingsIconProps } from './AdminSettingsIcon';

DireflowComponent.create({
  component: AdminSettingsIcon,
  configuration: {
    tagname: 'lp-admin-settings-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-admin-settings-icon': AdminSettingsIconProps
    }
  }
}
