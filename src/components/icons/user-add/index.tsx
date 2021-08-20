import { DireflowComponent } from 'direflow-component';

import UserAddIcon, { UserAddIconProps } from './UserAddIcon';

DireflowComponent.create({
  component: UserAddIcon,
  configuration: {
    tagname: 'lp-user-add-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-user-add-icon': UserAddIconProps
    }
  }
}
