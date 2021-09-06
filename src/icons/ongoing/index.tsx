import { DireflowComponent } from 'direflow-component';

import OngoingIcon, { OngoingIconProps } from './OngoingIcon';

DireflowComponent.create({
  component: OngoingIcon,
  configuration: {
    tagname: 'lp-ongoing-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-ongoing-icon': OngoingIconProps
    }
  }
}
