import { DireflowComponent } from 'direflow-component';

import AuthorizedIcon, { AuthorizedIconProps } from './AuthorizedIcon';

DireflowComponent.create({
  component: AuthorizedIcon,
  configuration: {
    tagname: 'lp-authorized-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-authorized-icon': AuthorizedIconProps
    }
  }
}
