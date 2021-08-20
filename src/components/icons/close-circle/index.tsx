import { DireflowComponent } from 'direflow-component';

import CloseCircleIcon, { CloseCircleIconProps } from './CloseCircleIcon';

DireflowComponent.create({
  component: CloseCircleIcon,
  configuration: {
    tagname: 'lp-close-circle-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-close-circle-icon': CloseCircleIconProps
    }
  }
}
