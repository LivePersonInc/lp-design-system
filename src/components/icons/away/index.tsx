import { DireflowComponent } from 'direflow-component';

import AwayIcon, { AwayIconProps } from './AwayIcon';

DireflowComponent.create({
  component: AwayIcon,
  configuration: {
    tagname: 'lp-away-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-away-icon': AwayIconProps
    }
  }
}
