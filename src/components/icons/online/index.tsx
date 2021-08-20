import { DireflowComponent } from 'direflow-component';

import OnlineIcon, { OnlineIconProps } from './OnlineIcon';

DireflowComponent.create({
  component: OnlineIcon,
  configuration: {
    tagname: 'lp-online-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-online-icon': OnlineIconProps
    }
  }
}
