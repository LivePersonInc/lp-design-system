import { DireflowComponent } from 'direflow-component';

import PolicyIcon, { PolicyIconProps } from './PolicyIcon';

DireflowComponent.create({
  component: PolicyIcon,
  configuration: {
    tagname: 'lp-policy-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-policy-icon': PolicyIconProps
    }
  }
}
