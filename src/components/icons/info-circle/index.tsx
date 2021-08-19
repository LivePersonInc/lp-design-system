import { DireflowComponent } from 'direflow-component';

import InfoCircleIcon, { InfoCircleIconProps } from './InfoCircleIcon';

DireflowComponent.create({
  component: InfoCircleIcon,
  configuration: {
    tagname: 'lp-info-circle-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-info-circle-icon': InfoCircleIconProps
    }
  }
}
