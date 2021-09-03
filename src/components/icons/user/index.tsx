import { DireflowComponent } from 'direflow-component';

import UserIcon, { UserIconProps } from './UserIcon';

DireflowComponent.create({
  component: UserIcon,
  configuration: {
    tagname: 'lp-user-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-user-icon': UserIconProps
    }
  }
}
