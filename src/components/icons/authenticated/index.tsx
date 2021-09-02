import { DireflowComponent } from 'direflow-component';

import AuthenticatedIcon, { AuthenticatedIconProps } from './AuthenticatedIcon';

DireflowComponent.create({
  component: AuthenticatedIcon,
  configuration: {
    tagname: 'lp-authenticated-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-authenticated-icon': AuthenticatedIconProps
    }
  }
}
