import { DireflowComponent } from 'direflow-component';

import DesktopIcon, { DesktopIconProps } from './DesktopIcon';

DireflowComponent.create({
  component: DesktopIcon,
  configuration: {
    tagname: 'lp-desktop-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-desktop-icon': DesktopIconProps
    }
  }
}
