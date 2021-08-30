import { DireflowComponent } from 'direflow-component';

import ApiIcon, { ApiIconProps } from './ApiIcon';

DireflowComponent.create({
  component: ApiIcon,
  configuration: {
    tagname: 'lp-api-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-api-icon': ApiIconProps
    }
  }
}
