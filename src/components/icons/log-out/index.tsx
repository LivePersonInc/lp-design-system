import { DireflowComponent } from 'direflow-component';

import LogOutIcon, { LogOutIconProps } from './LogOutIcon';

DireflowComponent.create({
  component: LogOutIcon,
  configuration: {
    tagname: 'lp-log-out-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-log-out-icon': LogOutIconProps
    }
  }
}
