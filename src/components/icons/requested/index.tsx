import { DireflowComponent } from 'direflow-component';

import RequestedIcon, { RequestedIconProps } from './RequestedIcon';

DireflowComponent.create({
  component: RequestedIcon,
  configuration: {
    tagname: 'lp-requested-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-requested-icon': RequestedIconProps
    }
  }
}
