import { DireflowComponent } from 'direflow-component';

import CloseIcon, { CloseIconProps } from './CloseIcon';

DireflowComponent.create({
  component: CloseIcon,
  configuration: {
    tagname: 'lp-close-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-close-icon': CloseIconProps
    }
  }
}
