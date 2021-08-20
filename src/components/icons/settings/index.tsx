import { DireflowComponent } from 'direflow-component';

import SettingsIcon, { SettingsIconProps } from './SettingsIcon';

DireflowComponent.create({
  component: SettingsIcon,
  configuration: {
    tagname: 'lp-settings-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-settings-icon': SettingsIconProps
    }
  }
}
