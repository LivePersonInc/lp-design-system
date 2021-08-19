import { DireflowComponent } from 'direflow-component';

import CloudIcon, { CloudIconProps } from './CloudIcon';

DireflowComponent.create({
  component: CloudIcon,
  configuration: {
    tagname: 'lp-cloud-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-cloud-icon': CloudIconProps
    }
  }
}
