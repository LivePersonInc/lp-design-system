import { DireflowComponent } from 'direflow-component';

import JoinIcon, { JoinIconProps } from './JoinIcon';

DireflowComponent.create({
  component: JoinIcon,
  configuration: {
    tagname: 'lp-join-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-join-icon': JoinIconProps
    }
  }
}
