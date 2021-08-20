import { DireflowComponent } from 'direflow-component';

import UserSaysIcon, { UserSaysIconProps } from './UserSaysIcon';

DireflowComponent.create({
  component: UserSaysIcon,
  configuration: {
    tagname: 'lp-user-says-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-user-says-icon': UserSaysIconProps
    }
  }
}
