import { DireflowComponent } from 'direflow-component';

import AppLauncherIcon, { AppLauncherIconProps } from './AppLauncherIcon';

DireflowComponent.create({
  component: AppLauncherIcon,
  configuration: {
    tagname: 'lp-app-launcher-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-app-launcher-icon': AppLauncherIconProps
    }
  }
}
