import { DireflowComponent } from 'direflow-component';

import ApplicationUserIcon, { ApplicationUserIconProps } from './ApplicationUserIcon';

DireflowComponent.create({
  component: ApplicationUserIcon,
  configuration: {
    tagname: 'lp-application-user-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-application-user-icon': ApplicationUserIconProps
    }
  }
}
