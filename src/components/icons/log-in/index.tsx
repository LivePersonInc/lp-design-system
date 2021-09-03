import { DireflowComponent } from 'direflow-component';

import LogInIcon, { LogInIconProps } from './LogInIcon';

DireflowComponent.create({
  component: LogInIcon,
  configuration: {
    tagname: 'lp-log-in-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-log-in-icon': LogInIconProps
    }
  }
}
