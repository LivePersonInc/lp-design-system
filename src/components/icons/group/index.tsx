import { DireflowComponent } from 'direflow-component';

import GroupIcon, { GroupIconProps } from './GroupIcon';

DireflowComponent.create({
  component: GroupIcon,
  configuration: {
    tagname: 'lp-group-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-group-icon': GroupIconProps
    }
  }
}
